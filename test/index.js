'use strict'

var fs = require('fs')
var path = require('path')
var remark = require('remark')
var test = require('tape')
var remarkRemoveLinks = require('..')

test('remark-remove-links', function(t) {
  t.equal(
    remark()
      .use(remarkRemoveLinks)
      .processSync(read('input1'))
      .toString(),
    remark()
      .processSync(read('output1'))
      .toString(),
    '#1'
  )

  t.equal(
    remark()
      .use(remarkRemoveLinks)
      .processSync(read('input2'))
      .toString(),
    remark()
      .processSync(read('output2'))
      .toString(),
    '#2'
  )

  t.equal(
    remark()
      .use(remarkRemoveLinks, {allow: ['image']})
      .processSync(read('input3'))
      .toString(),
    remark()
      .processSync(read('output3'))
      .toString(),
    '#3'
  )

  t.end()
})

function read(name) {
  return fs.readFileSync(path.join(__dirname, name) + '.md', 'utf8')
}
