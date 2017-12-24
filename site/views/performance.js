var ov = require('object-values')
var html = require('choo/html')

var video = require('../components/video')

module.exports = view

function view (state, emit) {
  var page = state.page
  return html`
    <div class="w100 ttu">
      <div class="x p0-5">
        <div class="c6 p0-5">${page.artist}</div>
        <div class="c6 p0-5">${page.venue}</div>
      </div>
      ${page.sources.map(function (source) {
        return video(source)
      })}
      <div class="x c12 p0-5">
        <div class="c3 p0-5">
          Setlist
        </div>
        <ol class="c9 py0-5">
          ${ov(page.setlist).map(function (song, i) {
            return html`<li class="x c12">  
              <div class="c4 px0-5">${('0'+i).slice(-2)}</div>
              <div class="c8 px0-5">${song}</div>
            </li>`
          })}
        </ol>
      </div>
      ${ov(page.files).map(function (file) {
        return html`<div><img src="${file.path}" class="db"></div>`
      })}
      <div>
        ${page.text}
      </div>
    </div>
  `
}