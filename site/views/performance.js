var objectValues = require('object-values')
var html = require('choo/html')

var imageLightbox = require('../components/image-lightbox')
var imageGrid = require('../components/image-grid')
var utilsContent = require('../utils/content')
var video = require('../components/video')

module.exports = view

function view (state, emit) {
  var page = state.page

  if (state.query.image) {
    return imageLightbox({
      image: page.files[state.query.image],
      handleClick: function () {
        emit(state.events.PUSHSTATE, page.url)
      }
    })
  }

  return html`
    <div class="w100 ttu">
      <div class="x p0-5 fs2">
        <div class="c6 p0-5">${page.artist}</div>
        <div class="c6 p0-5">${page.venue}</div>
      </div>
      ${page.sources.map(function (source) {
        return video(source, {
          textOffline: state.content['/'].offline,
          online: state.online
        })
      })}
      ${imageGrid({
        images: utilsContent.shuffle(objectValues(page.files))
      })}
      <div>
        ${page.text}
      </div>
    </div>
  `
}