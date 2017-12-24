var html = require('choo/html')
var xtend = require('xtend')
var views = require('./')

module.exports = view

function view (state, emit) {
  var href = state.href || '/'
  if (typeof state.content === 'undefined') return notfound()
  var page = state.content[href]
  if (state.loaded && typeof page === 'undefined') return notfound()
  if (!state.p2p) return nonp2p()
  if (!state.loaded && state.p2p) return loading()
  var view = views[page.view] || views.default

  if (!state.visited[page.url]) {
    emit(state.events.VISITED, { url: page.url })
  }

  return body(view(xtend(state, { page: page }), emit))
}

function loading () {
  return body(html`
    <div class="x xjc xac psf t0 l0 r0 b0">
      loading
    </div>
  `)
}

function notfound () {
  return body('not found')
}

function nonp2p () {
  return body(html`
    <div class="x xjc xac psf t0 l0 r0 b0">
      this is a p2p site, sorry
    </div>
  `)
}

function body (view) {
  return html`
    <body class="ff-sans bgc-black fc-white">
      ${view}
    </body>
  `
}