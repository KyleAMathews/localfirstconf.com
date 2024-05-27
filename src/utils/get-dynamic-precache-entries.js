function getDynamicPrecacheEntries(buildId) {
  const routes = [
    '/speakers',
    '/schedule',
    '/schedule/conference',
    '/schedule/expo',
    '/schedule/expo/jazz',
    '/schedule/expo/powersync',
    '/schedule/expo/fireproof',
    '/schedule/expo/lunch',
    '/schedule/expo/automerge',
    '/schedule/expo/dxos',
    '/schedule/expo/electric-sql',
    '/schedule/expo/yjs',
    '/schedule/expo/happy-hour',
    '/schedule/conference/venue-open-and-coffee',
    '/schedule/conference/welcome-by-mc',
    '/schedule/conference/the-past-present-and-future-of-local-first',
    '/schedule/conference/unexpected-benefits-of-going-local-first',
    '/schedule/conference/break',
    '/schedule/conference/external-data-sources-in-an-local-first-music-app',
    '/schedule/conference/end-to-end-encryption-demystified',
    '/schedule/conference/every-app-secretly-wants-to-be-local-first',
    '/schedule/conference/global-schemas',
    '/schedule/conference/lunch',
    '/schedule/conference/the-unreasonable-advantage-of-building-local-first',
    '/schedule/conference/an-amazing-13-years-journey',
    '/schedule/conference/lessons-from-building-an-ios-data-store',
    '/schedule/conference/first-local-first-the-forgotten-history-of-the-early-indies',
    '/schedule/conference/coffee-break',
    '/schedule/conference/partial-sync-is-a-red-herring',
    '/schedule/conference/local-first-and-social-software',
    '/schedule/conference/ucan-be-in-control-of-your-auth',
    '/schedule/conference/break',
    '/schedule/conference/postgres-and-local-first',
    '/schedule/conference/automerge-roadmap-and-sponsorship',
    '/schedule/conference/streaming-a-collaborative-filesystem',
    '/schedule/conference/real-world-offline-functionality-navigating-the-trade-offs',
    '/schedule/conference/home-cooked-software-and-barefoot-programmers',
    '/schedule/conference/wrap-up-and-end',
    '/schedule/conference/after-party',
    '/profile/link',
    '/profile/aaron-boodman',
    '/profile/maggie-appleton',
    '/profile/nik-graf',
    '/profile/tuomas-artman',
    '/profile/philip-lam',
    '/profile/alexander-stigsen',
    '/profile/paulus-esterhazy',
    '/profile/james-arthur',
    '/profile/martin-kleppmann',
    '/profile/drew-mccormack',
    '/profile/anton-pronkin',
    '/profile/yifeng-wang',
    '/profile/kevin-jahns',
    '/profile/ralf-kistner',
    '/profile/alex-good',
    '/profile/johannes-schickling',
    '/profile/anselm-eickhoff',
    '/profile/chad-fowler',
    '/profile/jack-mccloy',
    '/profile/jess-martin',
    '/profile/brooklyn-zelenka',
    '/profile/adam-wiggins',
    '/profile/attila-bartha',
    '/profile/chris-anderson',
    '/profile/daniel-harris',
    '/profile/kevin-de-porre',
    '/profile/konrad-kissener',
    '/profile/lukas-wiesehan',
    '/profile/philipp-dietrich',
    '/profile/phillip-van-der-merwe',
    '/profile/taylor-lucas'
  ]
  return [{url: '/schedule', revision: buildId}, ...routes.map((route) => ({url: `/_next/data/${buildId}${route}.json`, revision: buildId}))]
}

module.exports = getDynamicPrecacheEntries
