const config = require('../')
const test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isArray(config.extends))
  t.ok(isObject(config.rules))
  t.ok(isObject(config.plugins))
  t.ok(isString(config.parser))
  t.end()
})

function isArray (arr) {
  return Array.isArray(arr)
}

function isString (string) {
  return typeof string === 'string'
}

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
