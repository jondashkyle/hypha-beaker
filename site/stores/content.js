var objectValues = require('object-values')
var html = require('choo/html')
var hypha = require('hypha')
var xtend = require('xtend')
var path = require('path')

var view = require('../views/main')

module.exports = store

async function store (state, emitter, app) {
  var contentDir = '/content'
  state.content = { }
  state.loaded = false

  try {
    state.content = await loadContent(contentDir)
    state.p2p = true
  } catch (err) {
    state.p2p = false
  }

  state.loaded = true
  emitter.emit(state.events.RENDER)
}

async function loadContent (contentDir) {
  var archive = new DatArchive(window.location.toString())
  var options = { fs: archive, parent: contentDir }
  var files = await archive.readdir(contentDir, { recursive: true })
  var glob = files.map(function (file) { return path.join(contentDir, file) }) // funny hack
  return hypha.readFiles(glob, contentDir, options)
}
