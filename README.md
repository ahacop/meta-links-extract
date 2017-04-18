# meta-links-extract
> Reads in HTML, returns an array of objects representing the `<link>` elements

[![Build Status][build-badge]][build]
[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]

## Installation
```
yarn add meta-links-extract
```

> Or if you're using the [`npm`][npm] client: `npm install --save meta-links-extract`

## Usage
```
const extract = require("meta-links-extract")

const html = "<html><head><link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000"></head><body></body></html>"

extract(html)
// => [{ color: '#000000', href: 'https://assets-cdn.github.com/pinned-octocat.svg', rel: 'mask-icon' }]
```

### Tests
```
npm test
```

## LICENSE

MIT
