var html = require('choo/html')
var xtend = require('xtend')
var views = require('./')

module.exports = wrapper

function wrapper (state, emit) {
  var page = state.content[state.href || '/'] || { }
  var view = getView()
  state = xtend(state, { page: page })

  if (!state.visited[page.url]) {
    emit(state.events.VISITED, { url: page.url })
  }

  return body(view(state, emit))

  function getView () {
    if (isNotFound()) return notfound
    else if (isLoading()) return loading
    else if (!state.p2p) return views.nonp2p
    else return views[page.view] || views.default
  }

  function isNotFound () {
    if (!page) return true
    else if (typeof state.content === 'undefined') return true
    else if (state.loaded && typeof page === 'undefined') return true
    else return false
  }

  function isLoading () {
    return !state.loaded
  }
}

function loading () {
  return html`
    <div class="x xjc xac psf t0 l0 r0 b0 ttu">
      loading
    </div>
  `
}

function notfound () {
  return html`
    <div class="x xjc xac psf t0 l0 r0 b0 ttu">
      not found
    </div>
  `
}

function body (view) {
  return html`
    <body class="ff-sans bgc-black fc-white">
      ${view}
    </body>
  `
}