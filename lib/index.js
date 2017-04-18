"use strict"
const htmlparser = require("htmlparser2")

function extractLinks(html) {
  let links = []

  const onopentag = (name, attrs) => {
    if (name === "link") {
      links.push(attrs)
    }
  }

  const events = { onopentag }
  const parserConfig = { decodeEntities: true }
  const parser = new htmlparser.Parser(events, parserConfig)

  parser.write(html)
  parser.end()

  return links
}

module.exports = extractLinks
