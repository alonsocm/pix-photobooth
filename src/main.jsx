import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// If a previous app's service worker is still registered, drop it once this
// bundle actually runs. The kill-switch scripts under /sw.js cover the case
// where that worker is still serving its own cached pages.
async function dropStaleServiceWorkers() {
  if (!('serviceWorker' in navigator)) return
  const hadController = Boolean(navigator.serviceWorker.controller)
  try {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((registration) => registration.unregister()))
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
    }
  } catch {
    return
  }
  if (hadController) {
    window.location.reload()
  }
}

dropStaleServiceWorkers()

function ubicacionFor(link) {
  const explicit = link.getAttribute('data-ubicacion')
  if (explicit) return explicit
  const section = link.closest('section[id]')
  if (section?.id) return section.id
  if (link.closest('footer')) return 'footer'
  if (link.closest('header')) return 'navbar'
  if (link.closest('aside')) return 'boton-flotante'
  return 'sitio'
}

document.addEventListener('click', (event) => {
  const target = event.target
  if (!(target instanceof Element)) return
  const link = target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href') || ''
  const isWhatsapp = /wa\.me|api\.whatsapp\.com|whatsapp\.com/i.test(href)
  const isTel = href.toLowerCase().startsWith('tel:')
  if (!isWhatsapp && !isTel) return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', isTel ? 'contacto_telefono' : 'contacto_whatsapp', {
    ubicacion: ubicacionFor(link),
    link_url: link.href,
  })
})

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
