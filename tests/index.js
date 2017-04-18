const fs = require("fs")
const test = require("tape")
const extractLinks = require("../")

test("it returns the expected array of links for newyorker.com", t => {
  const newyorker = fs.readFileSync("./tests/fixtures/newyorker.html", "utf8")
  const expected = [
    {
      href: "/wp-content/assets/dist/css/core.min.css?cb=20170410191124",
      rel: "stylesheet",
    },
    { href: "http://www.newyorker.com/", rel: "canonical" },
    { href: "https://plus.google.com/+newyorker", rel: "publisher" },
    { href: "http://www.newyorker.com/wp-json/", rel: "https://api.w.org/" },
    { href: "http://www.newyorker.com/", rel: "shortlink" },
    {
      href: "http://www.newyorker.com/wp-json",
      rel: "https://github.com/WP-API/WP-API",
    },
    { href: "/favicon.ico", rel: "shortcut icon" },
    {
      href: "/wp-content/assets/dist/img/icon/apple-touch-icon.png",
      rel: "apple-touch-icon",
    },
    {
      href: "/wp-content/assets/dist/img/icon/apple-touch-icon-precomposed.png",
      rel: "apple-touch-icon-precomposed",
    },
    {
      href: "/wp-content/assets/dist/img/icon/apple-touch-icon-57x57-precomposed.png",
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
    },
    {
      href: "/wp-content/assets/dist/img/icon/apple-touch-icon-114x114-precomposed.png",
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
    },
    {
      href: "/wp-content/assets/dist/img/icon/apple-touch-icon-144x144-precomposed.png",
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
    },
  ]
  const actual = extractLinks(newyorker)

  t.deepEqual(actual, expected)

  t.end()
})

test("it returns the expected array of links for cnn.com", t => {
  const cnn = fs.readFileSync("./tests/fixtures/cnn.html", "utf8")
  const expected = [
    { href: "/favicon.ie9.ico", rel: "Shortcut Icon", type: "image/x-icon" },
    {
      href: "//i.cdn.cnn.com/cnn/.e/img/3.0/global/misc/apple-touch-icon.png",
      rel: "apple-touch-icon",
      type: "image/png",
    },
    { href: "http://www.cnn.com", rel: "canonical" },
    { href: "https://plus.google.com/+cnn/posts", rel: "publisher" },
    {
      href: "android-app://com.cnn.mobile.android.phone/http/www.cnn.com",
      rel: "alternate",
    },
    { href: "//cdn.optimizely.com/js/128727546.js", rel: "dns-prefetch" },
    { href: "//tpc.googlesyndication.com", rel: "dns-prefetch" },
    { href: "//pagead2.googlesyndication.com", rel: "dns-prefetch" },
    { href: "//www.googletagservices.com", rel: "dns-prefetch" },
    { href: "//partner.googleadservices.com", rel: "dns-prefetch" },
    { href: "//www.google.com", rel: "dns-prefetch" },
    { href: "//aax.amazon-adsystem.com", rel: "dns-prefetch" },
    { href: "//cdn.krxd.net", rel: "dns-prefetch" },
    {
      href: "//segment-data-us-east.zqtk.net/turner-47fcf6",
      rel: "dns-prefetch",
    },
    { href: "//ads.rubiconproject.com", rel: "dns-prefetch" },
    { href: "//optimized-by.rubiconproject.com", rel: "dns-prefetch" },
    { href: "//fastlane.rubiconproject.com", rel: "dns-prefetch" },
    { href: "//fastlane-adv.rubiconproject.com", rel: "dns-prefetch" },
    {
      href: "//a.postrelease.com/serve/load.js?async=true",
      rel: "dns-prefetch",
    },
    { href: "//w.usabilla.com", rel: "dns-prefetch" },
    {
      href: "//s.skimresources.com/js/87760X1540660.skimlinks.js",
      rel: "dns-prefetch",
    },
    {
      href: "//traffic.outbrain.com/network/trackpxl?advid=814&action=view",
      rel: "dns-prefetch",
    },
    { href: "//weather.api.cnn.io", rel: "dns-prefetch" },
    { href: "//pmd.cdn.turner.com", rel: "dns-prefetch" },
    { href: "//ht.cdn.turner.com", rel: "dns-prefetch" },
    { href: "//i2.cdn.cnn.com", rel: "dns-prefetch" },
    { href: "//www.ugdturner.com", rel: "dns-prefetch" },
    { href: "//vrt.outbrain.com", rel: "dns-prefetch" },
    { href: "//consent.truste.com", rel: "dns-prefetch" },
    { href: "//data.cnn.com", rel: "dns-prefetch" },
    { href: "//i.cdn.cnn.com", rel: "dns-prefetch" },
    { href: "//z.cdn.turner.com", rel: "dns-prefetch" },
    { href: "//edition.i.cdn.cnn.com", rel: "dns-prefetch" },
    { href: "http://edition.cnn.com/css/2.13.3/global.css", rel: "stylesheet" },
    {
      href: "http://edition.cnn.com/css/2.13.3/pages/page.css",
      rel: "stylesheet",
    },
  ]

  const actual = extractLinks(cnn)

  t.deepEqual(actual, expected)

  t.end()
})

test("it returns the expected array of links for danluu.com", t => {
  const danluu = fs.readFileSync("./tests/fixtures/danluu.html", "utf8")
  const expected = [
    {
      href: "https://danluu.com/atom.xml",
      rel: "alternate",
      title: "Dan Luu",
      type: "application/rss+xml",
    },
    { href: "data:;base64,iVBORw0KGgo=", rel: "icon" },
  ]

  const actual = extractLinks(danluu)

  t.deepEqual(actual, expected)

  t.end()
})
