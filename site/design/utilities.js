var path = require('path')
var gr8 = require('gr8')
var fs = require('fs')

var reset = fs.readFileSync(path.join(__dirname, '../node_modules/nanoreset/nanoreset.css'), 'utf8')
var options = require('./options')

var utils = [ ]

utils.push({
  prop: 'font-family',
  join: '-',
  vals: options.typography
})

utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: options.colors
})

utils.push({
  prop: { fc: 'color' },
  join: '-',
  vals: options.colors
})

module.exports = [
  reset,
  gr8({
    spacing: options.spacing,
    fontSize: options.fontSize,
    utils: utils
  })
].join(' ')