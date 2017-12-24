var objectValues = require('object-values')
var html = require('choo/html')

module.exports = view

function view (state, emit) {
  var page = state.page
  var info = state.content['/information']

  var interviews = objectValues(state.content['/interviews'].pages)
    .map(function (page) {
      return state.content[page.url]
    })

  var performances = objectValues(state.content['/performances'].pages)
    .map(function (page) {
      return state.content[page.url]
    })

  return html`
    <div class="usn ttu">
      <div class="psr">
        <div class="x xw p0-5">
          ${shuffle(renderPageImages(interviews)).splice(0, 12)}
        </div>
        <div class="x xjc xac psa t0 l0 r0 b0">
          <div class="p2 psa t0 l0">
            ${Math.floor(new Date() / 1000)}
          </div>
          <div class="p2 psa t0 r0">
            <a href="/information" class="fc-white tdn">${info.title}</a>
          </div>
          <div class="p2 fs4 ha psr z2 tac">
            ${shuffle(interviews).map(function (page, i) {
              return [
                i === 0 ? html`<span class="curd">${state.page.heading}</span>` : '',
                html`<div class="circle"></div>`,
                html`<a href="${page.url}" class="curp fc-white tdn">${page.title}</a>`
              ]
            })}
          </div>
        </div>
      </div>
      <div>
        ${shuffle(performances).map(function (page, i) {
          var images = objectValues(page.files).filter(file => file.type === 'image')
          var image = images[Math.floor(Math.random() * images.length)] 
          if (!image) return
          return html`
            <a
              href="${page.url}"
              class="db psr curp fc-white tdn bgsc bgrn bgpc fs4"
              style="background-image: url(${image.path})"
            >
              <div class="psa t0 l0 r0 b0 x xjc xac tac">
                ${page.artist} @ ${page.venue}
              </div>
              <div style="padding-bottom: 56.25%"></div>
            </a>
          `
        })}
      </div>
    </div>
  `
}

function renderPageImages (pages) {
  return pages.reduce(function (result, page, i) {
    if (!page.files) return
    var images = objectValues(page.files).filter(file => file.type === 'image')
    result.push(randomImage(images, page))
    result.push(randomImage(images, page))
    result.push(randomImage(images, page))
    return result
  }, [ ])
}

function randomImage (images, page) {
  var image = images[Math.floor(Math.random() * images.length)]
  return html`
    <div class="c4 p0-5">
      <a
        href="${page.url}"
        class="bgc-white db curp bgsc bgrn bgpc w100"
        style="background-image: url(${image.path})"
      ><div style="padding-bottom: 100%"></div></a>
    </div>
  `
}

function shuffle (array) {
  let counter = array.length

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)
    counter--
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}