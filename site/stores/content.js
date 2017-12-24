var objectValues = require('object-values')
var html = require('choo/html')
var hypha = require('hypha')
var xtend = require('xtend')

var view = require('../views/main')

module.exports = store

async function store (state, emitter, app) {
  state.content = { }
  state.visited = [ ]
  state.p2p = typeof DatArchive !== 'undefined'
  state.loaded = false
  state.online = true

  var archive = new DatArchive(window.location.toString())
  var options = { fs: archive, parent: '/content' }

  try {
    var files = await getFiles()
    var content = await hypha.readFiles(files, '/content', options)

    objectValues(content).forEach(function (page) {
      state.content[page.url] = page
    })
  } catch (err) {
    console.log(err)
  }

  state.loaded = true
  emitter.emit(state.events.RENDER)

  if (typeof callback === 'function') callback(content)
  return content

  async function getFiles () {
    var files = await archive.readdir('/content', { recursive: true })
    files = files.map(function (file) { return '/content/' + file }) // funny hack
    return files
  }
}