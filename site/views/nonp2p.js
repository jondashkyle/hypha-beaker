var objectValues = require('object-values')
var raw = require('choo/html/raw')
var markdown = require('marked')
var html = require('choo/html')

module.exports = view

function view (state, emit) {
  
  return html`
    <div class="vhmn100 x xdc xjb">
      <div class="x xw lh1-5 p0-5 psr z2">
        <div class="c1 p0-5">
          
        </div>
        <div class="c7 p0-5">
          ${raw(markdown('This is a speculative example of generating a full site using [Hypha](https://github.com/jondashkyle/hypha) with [Choo](https://github.com/jondashkyle/hypha) in Beaker Browser. Although the codebase is quite readable, a comprehensive unpacking of what’s going on is included in the information page.'))}
        </div>
      </div>
      <div class="x xw lh1-5 p0-5 psr z2">
        <div class="c1 px0-5">
          1
        </div>
        <div class="c11 px0-5">
          Download <a href="https://beakerbrowser.com">Beaker Browser</a>        </div>
        <div class="c1 px0-5">
          2
        </div>
        <div class="px0-5 c11">
          Navigate to <a href="dat://beaker-hypha-jkm.hashbase.io/">dat://beaker-hypha-jkm.hashbase.io/</a>
        </div>
        <div class="c1 px0-5">
          3
        </div>
        <div class="px0-5 c11">
          Fork the site and make some changes to content!
        </div>
      </div>
      <div class="p1">
        <a href="dat://beaker-hypha-jkm.hashbase.io/">
          <img src="/assets/example.jpg" class="w100">
        </a>
      </div>
    </div>
  `
}
