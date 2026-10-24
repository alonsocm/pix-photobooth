import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'vite'

const indexPath = new URL('../dist/index.html', import.meta.url)
const vite = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const appHtml = render()
  const html = readFileSync(indexPath, 'utf8')
  const placeholder = /<div id="root">\s*<\/div>/

  if (!placeholder.test(html)) {
    throw new Error('dist/index.html is missing <div id="root"></div>')
  }

  // React 19 emits image preloads ahead of the tree. They belong in <head>,
  // not inside #root, or hydration will not match the component output.
  const preloads = appHtml.match(/^(?:<link rel="preload"[^>]*>)+/)?.[0] ?? ''
  const body = preloads ? appHtml.slice(preloads.length) : appHtml
  const withHead = preloads ? html.replace('</head>', () => `${preloads}\n  </head>`) : html
  const nextHtml = withHead.replace(placeholder, () => `<div id="root">${body}</div>`)
  writeFileSync(indexPath, nextHtml)
  console.log(`Prerendered dist/index.html (${nextHtml.length} bytes)`)
} finally {
  await vite.close()
}
