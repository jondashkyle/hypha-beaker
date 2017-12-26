var objectValues = require('object-values')
var raw = require('choo/html/raw')
var markdown = require('marked')
var html = require('choo/html')

var utilsContent = require('../utils/content')

module.exports = view

function view (state, emit) {
  var page = state.page
  
  return html`
    <div>
      <div class="x xjb p0-5 fs2 ttu">
        <div class="p0-5">${page.title}</div>
        <div class="p0-5">
          <a href="/" class="tdn fc-white">Index</a>
        </div>
      </div>
      <div class="p1 lh1-5 copy p1">
        ${raw(markdown(page.text))}
      </div>
    </div>
  `
}
