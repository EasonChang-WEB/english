const CACHE_NAME = 'english-quiz-v1';
const STATIC_ASSETS = [
  '/english/',
  '/english/index.html',
  '/english/config.js',
  '/english/vocabulary.js',
  '/english/vocabulary_g8b.js',
  '/english/grammar_complete.js',
  '/english/grammar_g8b.js',
  '/english/reading_passages.js',
  '/english/script.js',
  '/english/manifest.json',
  'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@400;500;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,600;0,9..40,900;1,9..40,300&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // AI proxy 請求永遠走網路，不快取
  if (url.hostname === 'english-test.replit.app') {
    event.respondWith(fetch(event.request));
    return;
  }

  // Google Fonts 走網路優先，失敗用快取
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 靜態資源：快取優先，網路更新
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
