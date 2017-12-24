var objectValues = require('object-values')
var html = require('choo/html')
var hypha = require('hypha')
var xtend = require('xtend')

var view = require('../views/main')

module.exports = store

async function store (state, emitter, app) {
  var archive = new DatArchive(window.location.toString())
  var options = { fs: archive, parent: '/content' }

  state.content = { }
  state.visited = { }
  state.loaded = false
  state.online = navigator.onLine
  state.p2p = typeof DatArchive !== 'undefined'

  // events
  state.events.VISITED = 'visited'

  // event handlers
  emitter.on(state.events.VISITED, handleVisit)

  // initialize
  await loadDatSite()

  async function loadDatSite () {
    try {
      var files = await getDatFiles()
      var content = await hypha.readFiles(files, '/content', options)
      objectValues(content).forEach(function (page) {
        state.content[page.url] = page
      })
    } catch (err) {
      console.log(err)
      state.p2p = false
    }

    state.loaded = true
    emitter.emit(state.events.RENDER)
  }

  function handleVisit (data) {
    state.visited[data.url] = true
  }

  async function getDatFiles () {
    var files = await archive.readdir('/content', { recursive: true })
    files = files.map(function (file) { return '/content/' + file }) // funny hack
    return files
  }
}