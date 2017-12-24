var ov = require('object-values')
var html = require('choo/html')

module.exports = view

function view (state, emit) {
  var page = state.page
  console.log(page)
  return html`
    <div>
      <div>${page.title || page.name}</div>
      ${ov(page.pages).map(function (page) {
        page = state.content[page.url]
        return html`<a href="${page.url}">${page.name}</a>`
      })}
      <div>
        ${page.text}
      </div>
    </div>
  `
}