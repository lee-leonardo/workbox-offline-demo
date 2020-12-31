declare const self: ServiceWorkerGlobalScope;

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
      })
    ]
  })
)

/*
  Custom Handler Example
  - matcher, the check that determines if you are
  - strategy, the

  Extending the Strategy is most likely  overkill, the demonstration here is that you theoretically can.
  If you are desiring to add some state level mechanisms to your cache, extending makes this simpler, however it is much easier to use the plugins to accomplish most tasks.

  Custom Plugins have a few components to address
  - matcher, the check to see which
  - strategy, an object that handles the network request and high level logic
    - cacheName: the name of the cache being used
    - plugins, an entry point for modifying the behavior of a strategy, for instance the keys of within the cache, default objects, etc.
  - method, if you want to scope this to only "GET" requests, ad nauseum.
*/
// Can Override Here
class OneApiStrategy extends CacheFirst {
  // handle(options) {

  // }

  
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
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

