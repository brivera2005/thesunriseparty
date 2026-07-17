/* Project Sunrise service worker - Pass 53.2 hard cache bust.
 * Quiz tap targets + tip framing + Trump comparison rewrite.
 */

const CACHE = "sunrise-v53.2-20260717T1000-quiz-tap";

const PRECACHE = [

  "/manifest.webmanifest",

  "/icon-192.png",

  "/icon-512.png",

  "/apple-touch-icon.png",

  "/favicon.ico",

];



self.addEventListener("message", (event) => {

  if (event.data && event.data.type === "SKIP_WAITING") {

    self.skipWaiting();

  }

});



self.addEventListener("install", (event) => {

  event.waitUntil(

    caches

      .open(CACHE)

      .then((cache) => cache.addAll(PRECACHE))

      .then(() => self.skipWaiting())

  );

});



self.addEventListener("activate", (event) => {

  event.waitUntil(

    caches

      .keys()

      .then((keys) =>

        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))

      )

      .then(() => self.clients.claim())

  );

});



function isDocumentOrAsset(request, url) {

  if (request.mode === "navigate") return "document";

  const dest = request.destination;

  if (dest === "document" || dest === "style" || dest === "script") return "document";

  if (url.pathname.endsWith(".html") || url.pathname.endsWith(".css") || url.pathname.endsWith(".js")) {

    return "document";

  }

  return "other";

}



self.addEventListener("fetch", (event) => {

  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;



  const kind = isDocumentOrAsset(event.request, url);



  // Network-first for HTML/CSS/JS so mobile never sticks on an old shell.

  if (kind === "document") {

    event.respondWith(

      fetch(event.request)

        .then((response) => {

          if (response && response.status === 200 && response.type === "basic") {

            const clone = response.clone();

            caches.open(CACHE).then((cache) => cache.put(event.request, clone));

          }

          return response;

        })

        .catch(() => caches.match(event.request))

    );

    return;

  }



  // Cache-first only for icons/manifest offline helpers.

  event.respondWith(

    caches.match(event.request).then((cached) => {

      if (cached) return cached;

      return fetch(event.request).then((response) => {

        if (!response || response.status !== 200 || response.type !== "basic") {

          return response;

        }

        const clone = response.clone();

        caches.open(CACHE).then((cache) => cache.put(event.request, clone));

        return response;

      });

    })

  );

});

