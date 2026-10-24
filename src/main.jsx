import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
