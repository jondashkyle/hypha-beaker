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
    else if (!state.p2p) return nonp2p
    else if (isLoading()) return loading
    else return views[page.view] || views.default
  }

  function isNotFound () {
    return !page ||
    typeof state.content === 'undefined' ||
    state.loaded && typeof page === 'undefined'
  }

  function isLoading () {
    return !state.loaded && state.p2p
  }
}

function loading () {
  return html`
    <div class="x xjc xac psf t0 l0 r0 b0">
      loading
    </div>
  `
}

function notfound () {
  return 'not found'
}

function nonp2p () {
  return html`
    <div class="x xjc xac psf t0 l0 r0 b0">
      this is a p2p site, sorry
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