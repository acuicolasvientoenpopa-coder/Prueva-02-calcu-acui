const CACHE='aquacalc-v3.1';
const ASSETS=['/'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(
  caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
    return caches.open(CACHE).then(cache=>{cache.put(e.request,res.clone());return res;});
  }))
));
