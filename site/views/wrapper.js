var html = require('choo/html')
var xtend = require('xtend')
var views = require('./')

module.exports = view

function view (state, emit) {
  var href = state.href || '/'
  if (typeof state.content === 'undefined') return notfound()
  var page = state.content[href]
  if (state.loaded && typeof page === 'undefined') return notfound()
  if (!state.loaded && typeof page === 'undefined') return loading()
  var view = views[page.view] || views.default

  return html`
    <body>
      ${view(xtend(state, { page: page }), emit)}
    </body>
  `
}

function loading () {
  return html`
    <body>
      loading
    </body>
  `
}

function notfound () {
  return html`
    <body>
      not found
    </body>
  `
}