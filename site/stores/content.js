var objectValues = require('object-values')
var html = require('choo/html')
var hypha = require('hypha')
var xtend = require('xtend')
var path = require('path')

var view = require('../views/main')

module.exports = store

async function store (state, emitter, app) {
  var archive = new DatArchive(window.location.toString())
  var contentDir = '/content'

  state.content = { }
  state.loaded = false

  loadContent(archive, contentDir)
    .then(handleLoad)
    .catch(handleError)

  function handleLoad (data) {
    state.content = data
    state.loaded = true
    emitter.emit(state.events.RENDER)
  }

  function handleError (err) {
    state.loaded = true
    state.p2p = false
    console.warn(err)
  }
}

async function loadContent (archive, contentDir) {
  try {
    var options = { fs: archive, parent: contentDir }
    var files = await archive.readdir(contentDir, { recursive: true })
    var glob = files.map(function (file) { return path.join(contentDir, file) }) // funny hack
    return await hypha.readFiles(glob, contentDir, options)
  } catch (err) {
    return { }
  }
}
