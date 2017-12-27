var objectValues = require('object-values')
var raw = require('choo/html/raw')
var markdown = require('marked')
var html = require('choo/html')

var utilsContent = require('../utils/content')

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
          ${createImages()}
        </div>
        <div class="x xjc xac psa t0 l0 r0 b0 pen">
          <div class="p2 psa t0 l0 fs0-5">
            ${Math.floor(new Date() / 1000)}
          </div>
          <div class="p2 psa b0 r0 l0 z2 fs2 tac">
            <a href="/information" class="pea fc-white tdn">${info.title}</a>
          </div>
          <div class="p2 fs4 ha psr z2 tac">
            ${createInterviews()}
          </div>
        </div>
      </div>
      ${createPerformances()}
      ${createFooter()}
    </div>
  `

  function createImages () {
    return utilsContent.shuffle(renderPageImages(interviews))
      .splice(0, 12)
      .map(function (image) {
        return html`
          <div class="c4 p0-5">
            ${image}
          </div>
        `
      })
  
  }

  function createInterviews () {
    return utilsContent.shuffle(interviews).map(function (page, i) {
      return [
        i === 0 ? html`<span class="curd">${state.page.heading}</span>` : '',
        html`<div class="circle"></div>`,
        createLink(page)
      ]
    })
  }

  function createPerformances () {
    return utilsContent.shuffle(performances).map(function (page, i) {
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
            ${page.title} / ${page.venue}
          </div>
          <div style="padding-bottom: 56.25%"></div>
        </a>
      `
    })
  }

  function createFooter () {
    return html`
      <div class="x p0-5">
        ${page.footer.map(function (note) {
          return html`
            <div class="c6 p0-5">
              ${raw(markdown(note))}
            </div>
          `
        })}
      </div>
    `
  }

  function createLink (props) {
    var visited = state.visited[props.url]
    return html`
      <a
        href="${props.url}"
        class="curp ${visited ? 'line-through' : ''} fc-white tdn pea"
      >${props.title}</a>
    `
  }

  function renderPageImages (pages) {
    return pages.reduce(function (result, props, i) {
      if (!props.files) return
      var visited = state.visited[props.url]
      var images = objectValues(props.files).filter(file => file.type === 'image')
      result.push(randomImage())
      result.push(randomImage())
      result.push(randomImage())
      return result

      function randomImage () {
        var image = images[Math.floor(Math.random() * images.length)]

        return html`
          <a
            href="${props.url}"
            class="psr bgc-white db curp bgsc bgrn bgpc w100"
            style="background-image: url(${image.path})"
          >
            ${visited ? ex() : ''}
            <div style="padding-bottom: 100%"></div>
          </a>
        `
      }
    }, [ ])
  }
}

function ex () {
  return html`
    <div
      class="z2 psa t0 l0 r0 b0 bgsct bgrn bgpc w100"
      style="background-image: url(/assets/x.svg)"
    ></div>
  `
}