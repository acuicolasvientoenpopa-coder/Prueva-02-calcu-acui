const CACHE='aquacalc-v3.1';
self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll([
    '/',
    '/index.html'
  ])).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(
  caches.match(e.request).then(cached=>{
    if(cached) return cached;
    return fetch(e.request).then(res=>{
      if(!res||res.status!==200) return res;
      return caches.open(CACHE).then(cache=>{
        cache.put(e.request,res.clone());
        return res;
      });
    }).catch(()=>caches.match('/index.html'));
  })
));
