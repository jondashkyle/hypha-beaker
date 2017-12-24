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

  return body(view(xtend(state, { page: page }), emit))
}

function loading () {
  return body(html`
    <div class="x xjc xac">loading</div>
  `)
}

function notfound () {
  return body('not found')
}

function body (view) {
  return html`
    <body class="ff-sans bgc-black fc-white">
      ${view}
    </body>
  `
}