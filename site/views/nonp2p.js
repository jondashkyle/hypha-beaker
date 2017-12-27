var objectValues = require('object-values')
var raw = require('choo/html/raw')
var markdown = require('marked')
var html = require('choo/html')

module.exports = view

var text = `
`

function view (state, emit) {
  
  return html`
    <div class="vhmn100 x xdc xjb">
      <div class="p1">
        <a href="dat://beaker-hypha-jkm.hashbase.io/">
          <img src="/assets/example.jpg" class="w100">
        </a>
      </div>
      <div class="x xw fs2 p0-5 psr z2 ttu">
        <div class="c1 p0-5">
          1
        </div>
        <div class="c11 p0-5">
          Download <a href="https://beakerbrowser.com">Beaker Browser</a>        </div>
        <div class="c1 p0-5">
          2
        </div>
        <div class="p0-5 c11">
          <a href="dat://beaker-hypha-jkm.hashbase.io/">dat://beaker-hypha-jkm.hashbase.io/</a>
        </div>
      </div>
    </div>
  `
}
