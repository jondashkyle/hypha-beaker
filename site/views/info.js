var objectValues = require('object-values')
var html = require('choo/html')

var utilsContent = require('../utils/content')

module.exports = view

function view (state, emit) {
  var page = state.page
  
  return html`
    <div>
      ${page.title}
    </div>
  `
}
