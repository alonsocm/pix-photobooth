import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { createServer } from 'vite'

const distDir = new URL('../dist/', import.meta.url)
const indexPath = new URL('index.html', distDir)
const shell = readFileSync(indexPath, 'utf8')
const placeholder = /<div id="root">\s*<\/div>/

if (!placeholder.test(shell)) {
  throw new Error('dist/index.html is missing <div id="root"></div>')
}

function escapeText(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;')
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, '&quot;')
}

function applyHead(html, page) {
  const canonical = `https://somospix.com${page.path}`
  const image = `https://somospix.com${page.photos[0].src}`
  const imageAlt = page.photos[0].alt
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  const faqJson = JSON.stringify(faqLd).replace(/</g, '\\u003c')

  let next = html
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(page.title)}</title>`)
  next = next.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
  )
  next = next.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  )
  next = next.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(page.title)}" />`,
  )
  next = next.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
  )
  next = next.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
  )
  next = next.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${image}" />`,
  )
  next = next.replace(
    /<meta property="og:image:alt" content="[^"]*" \/>/,
    `<meta property="og:image:alt" content="${escapeAttr(imageAlt)}" />`,
  )
  next = next.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}" />`,
  )
  next = next.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}" />`,
  )
  next = next.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${image}" />`,
  )
  next = next.replace(
    /<meta name="twitter:image:alt" content="[^"]*" \/>/,
    `<meta name="twitter:image:alt" content="${escapeAttr(imageAlt)}" />`,
  )
  next = next.replace('</head>', () => `    <script type="application/ld+json">${faqJson}</script>\n  </head>`)
  return next
}

function inject(appHtml, page) {
  const preloads = appHtml.match(/^(?:<link rel="preload"[^>]*>)+/)?.[0] ?? ''
  const body = preloads ? appHtml.slice(preloads.length) : appHtml
  let html = page ? applyHead(shell, page) : shell
  if (preloads) html = html.replace('</head>', () => `${preloads}\n  </head>`)
  return html.replace(placeholder, () => `<div id="root">${body}</div>`)
}

function assertPage(html, page) {
  const h1Count = html.match(/<h1\b/gi)?.length ?? 0
  if (h1Count !== 1) {
    throw new Error(`${page?.path || '/'} has ${h1Count} h1 tags`)
  }
  if (!html.includes('google-site-verification')) {
    throw new Error(`${page?.path || '/'} is missing google-site-verification`)
  }
  if (/pachuca/i.test(html) || /boas/i.test(html) || /1 hora de anticipación/.test(html)) {
    throw new Error(`${page?.path || '/'} includes a forbidden phrase`)
  }
  if (!page) return
  if (page.title.length >= 60) {
    throw new Error(`${page.path} title is ${page.title.length} characters`)
  }
  if (!html.includes(`<title>${escapeText(page.title)}</title>`)) {
    throw new Error(`${page.path} title was not written`)
  }
  if (!html.includes(page.h1)) {
    throw new Error(`${page.path} h1 is missing`)
  }
  if (!html.includes('"@type":"FAQPage"') && !html.includes('"@type": "FAQPage"')) {
    throw new Error(`${page.path} is missing FAQPage JSON-LD`)
  }
  if (!html.includes(`<link rel="canonical" href="https://somospix.com${page.path}" />`)) {
    throw new Error(`${page.path} canonical is missing`)
  }
}

const vite = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const { LANDINGS } = await vite.ssrLoadModule('/src/data/landings.js')

  const homeHtml = inject(render('/'), null)
  assertPage(homeHtml, null)
  writeFileSync(indexPath, homeHtml)
  console.log(`Prerendered / (${homeHtml.length} bytes)`)

  for (const page of LANDINGS) {
    const html = inject(render(page.path), page)
    assertPage(html, page)
    const filename = join(fileURLToPath(distDir), `${page.path.slice(1)}.html`)
    writeFileSync(filename, html)
    console.log(`Prerendered ${page.path} (${html.length} bytes)`)
  }
} finally {
  await vite.close()
}

function fileURLToPath(url) {
  return decodeURIComponent(url.pathname)
}
