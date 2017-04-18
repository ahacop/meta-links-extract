# meta-links-extract
Reads in HTML, returns an array of objects representing the `<link>` elements

[![Travis](https://img.shields.io/travis/ahacop/meta-links-extract)](https://travis-ci.org/ahacop/meta-links-extract)
[![Codecov](https://img.shields.io/codecov/c/github/ahacop/meta-links-extract.svg)](https://codecov.io/github/ahacop/meta-links-extract)
[![npm](https://img.shields.io/npm/v/meta-links-extract.svg)](https://www.npmjs.com/package/meta-links-extract)
[![npm](https://img.shields.io/npm/l/meta-links-extract.svg)](https://github.com/ahacop/meta-links-extract/blob/master/LICENSE)

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
