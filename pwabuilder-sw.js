/*
  Caching with Predefined Caching Strategies
*/
import { registerRoute } from 'workbox-routing'
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst
} from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import {ExpirationPlugin} from 'worbox-expiration'

/*
  registerRoute's callback version's context.
    - https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing#~handlerCallback
  - you can check against the url which is parsed out as json
    - https://developer.mozilla.org/en-US/docs/Web/API/URL
  - request is the same as the fetch request object
    - https://fetch.spec.whatwg.org/
*/
registerRoute(
  ({request}) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
);

registerRoute(
  ({request}) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
);

registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30 // cached for 30 days.
      })
    ]
  })
)

/* 
  Custom Handler Example

  matcher, the check to see which 
*/
class OneApiStrategy extends CacheFirst {
  handle({event, request}) {
    super.handle({ event, request })

  }

  _handle(request, handler) {

  }
}

registerRoute(
  ({url}) => url.hostname === "the-one-api.dev",
  new OneApiStrategy({
    cacheName: 'onering',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      {
        // Used to generate the cache key, the last in the plugins list dictates, default is the url
        cacheKeyWillBeUsed: async ({request}) => {
          const parsedUrl = new URL(request.url);
          return parsedUrl.pathname + parsedUrl.search;
        },
      }
    ]
  }),
  "GET"
)

/*
  Precache
*/
// import { precacheAndRoute } from 'workbox-precaching'

// precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

