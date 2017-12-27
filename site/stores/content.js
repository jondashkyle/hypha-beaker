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

  loadContent(contentDir)
    .then(handleLoad)
    .catch(handleError)

  function handleLoad (data) {
    state.content = data
    state.loaded = true
    state.p2p = true
    emitter.emit(state.events.RENDER)
  }

  function handleError (err) {
    console.warn(err)
    state.loaded = true
    state.p2p = false
    emitter.emit(state.events.RENDER)
  }
}

async function loadContent (contentDir) {
  var archive = new DatArchive(window.location.toString())
  var options = { fs: archive, parent: contentDir }
  var files = await archive.readdir(contentDir, { recursive: true })
  var glob = files.map(function (file) { return path.join(contentDir, file) }) // funny hack
  return await hypha.readFiles(glob, contentDir, options)
}
