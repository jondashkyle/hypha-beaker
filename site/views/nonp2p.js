var objectValues = require('object-values')
var raw = require('choo/html/raw')
var markdown = require('marked')
var html = require('choo/html')

module.exports = view

var text = `
  Download <a href="https://beakerbrowser.com">Beaker Browser</a> and head to <a href="dat://beaker-hypha-jkm.hashbase.io/">dat://beaker-hypha-jkm.hashbase.io/</a>
`

function view (state, emit) {
  
  return html`
    <div class="vhmn100 x xdc xjb">
      <div class="p1">
        <a href="dat://beaker-hypha-jkm.hashbase.io/">
          <img src="/assets/example.jpg" class="w100">
        </a>
      </div>
      <div class="p1 fs2 tac p1 psr z2 ttu">
        ${raw(markdown(text))}
      </div>
    </div>
  `
}
