// Kill switch for a service worker left behind by the previous app.
// On update: take control, drop every cache, unregister, and reload open tabs.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(retire());
});

async function retire() {
  await self.clients.claim();

  const cacheKeys = await caches.keys();
  await Promise.all(cacheKeys.map((key) => caches.delete(key)));

  await self.registration.unregister();

  const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  await Promise.all(windows.map(async (client) => {
    if (!client.url.startsWith('http') || typeof client.navigate !== 'function') return;
    try {
      await client.navigate(client.url);
    } catch {
      // The tab may already be closing.
    }
  }));
}
