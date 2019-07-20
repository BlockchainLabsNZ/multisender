importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00b42f0f2d4d370dae09.js",
    "revision": "fb6230ee316b435f18e16f714dd20795"
  },
  {
    "url": "/_nuxt/0371fc581c8d85e319b5.js",
    "revision": "e5a9116558f51702fc5a16635e62a0bf"
  },
  {
    "url": "/_nuxt/13e04bf859ac28b0559e.js",
    "revision": "72968ecf71c65635fd49aa1d61c315e7"
  },
  {
    "url": "/_nuxt/1fb7bf7fb99de0ca9f6e.js",
    "revision": "418b7ab0aab5db10e44ab8dbfc3e10f0"
  },
  {
    "url": "/_nuxt/283796bae2d1d08d1a9a.js",
    "revision": "c775c41143874898167328e47f9cbe80"
  },
  {
    "url": "/_nuxt/3aaf690410e0b5231e65.js",
    "revision": "a92046b3a6218ad9aa2063f8635de4d3"
  },
  {
    "url": "/_nuxt/4894d16721c4814753f0.js",
    "revision": "6cf7d06c6ec191b185b2b23e4c8a9de2"
  },
  {
    "url": "/_nuxt/66a7c2547212a41b7590.js",
    "revision": "0f83f5987cef5d0668f1e6977673cf34"
  },
  {
    "url": "/_nuxt/71e00f0e3563477631ce.js",
    "revision": "f780ce795f362dff77e9190246f4670b"
  },
  {
    "url": "/_nuxt/7ef95451ae0a6ae7e9e0.js",
    "revision": "bacbf7a6d875cafed0cd3a50570d43d3"
  },
  {
    "url": "/_nuxt/98616e09f6f0c7935809.js",
    "revision": "f46ebacc63919013de4d36468d061e84"
  },
  {
    "url": "/_nuxt/ab152d637e63a81e6c89.js",
    "revision": "aa5d3a31817cc6e756e9a0da1400de94"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
