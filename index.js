'use strict'

var visit = require('unist-util-visit')
var squeezeParagraphs = require('mdast-squeeze-paragraphs')

var types = ['link', 'linkReference', 'image', 'imageReference', 'definition']

var splice = [].splice

module.exports = removeLinks

function removeLinks(options = {}) {
  return transformer

  function transformer(tree) {
    var customTypes = [].concat(types)
    if (Array.isArray(options.allow)) {
      for (var i = 0, len = options.allow.length; i < len; i++) {
        customTypes.splice(customTypes.indexOf(options.allow[i]), 1)
      }
    }

    visit(tree, customTypes, visitor)
    squeezeParagraphs(tree)
  }
}

function visitor(node, index, parent) {
  var siblings = parent.children

  splice.apply(siblings, [index, 1].concat(node.children || []))

  return index
}
