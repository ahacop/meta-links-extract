# meta-links-extract
Reads in HTML, returns an array of objects representing the `<link>` elements

[![Travis](https://api.travis-ci.org/ahacop/meta-links-extract.svg?branch=master)](https://travis-ci.org/ahacop/meta-links-extract)
[![Codecov](https://img.shields.io/codecov/c/github/ahacop/meta-links-extract.svg)](https://codecov.io/github/ahacop/meta-links-extract)
[![npm](https://img.shields.io/npm/v/meta-links-extract.svg)](https://www.npmjs.com/package/meta-links-extract)
[![npm](https://img.shields.io/npm/l/meta-links-extract.svg)](https://github.com/ahacop/meta-links-extract/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation
```bash
yarn add meta-links-extract
```

> Or if you're using npm: `npm install --save meta-links-extract`

## Usage
```javascript
const extract = require("meta-links-extract")

const html = `
  <html>
    <head>
      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
    </head>
    <body>
    </body>
  </html>`

extract(html)
// => [{ color: '#000000', href: 'https://assets-cdn.github.com/pinned-octocat.svg', rel: 'mask-icon' }]
```

### Tests
```
npm test
```

## LICENSE

MIT
