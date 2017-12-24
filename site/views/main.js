var ov = require('object-values')
var html = require('choo/html')
var video = require('../components/video')

module.exports = view

function view (state, emit) {
  var page = state.page
  return html`
    <div>
      <div class="p1 ttu">${page.title || page.name}</div>
      ${ov(page.pages).map(function (page) {
        page = state.content[page.url]
        return html`<a href="${page.url}">${page.name}</a>`
      })}
      ${ov(page.files).map(function (file, i) {
        return html`<div><img src="${file.path}" class="db"></div>`
      })}
      <div>
        ${page.text}
      </div>
      ${video(page.source, {
        ratio: page.ratio
      })}
      <ol class="p1 ttu">
        ${ov(page.files).map(function (file, i) {
          return html`<li class="x">  
            <div class="c2">${('0'+i).slice(-2)}</div>
            <div class="c10">${file.filename}</div>
          </li>`
        })}
      </ol>
    </div>
  `
}