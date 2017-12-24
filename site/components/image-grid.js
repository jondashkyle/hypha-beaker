var html = require('choo/html')

module.exports = imageGrid

function imageGrid (props) {
  if (!props) return
  var result = [ ]
  var last = 1
  var total = 0
  groupImages()

  return html`
    <div class="w100 p0-5">
      ${result.map(function (row) {
        return html`
          <div class="x">
            ${row.map(function (col, i) {
              col.i = total += 1
              return createImage(col)
            })}
          </div>
        `
      })} 
    </div>
  `

  function groupImages () {
    result.push(props.images.splice(0, getAmount()))
    if (props.images.length > 0) groupImages()
  }

  function getAmount () {
    var amount = Math.floor(Math.random() * 3) + 1
    if (amount === last) return getAmount()
    last = amount
    return amount
  }

  function createImage (props) {
    return html`
      <div class="xx p0-5 psr">
        <a href="?image=${props.filename}" class="db">
          <img src="${props.path}" class="c12">
        </a>
        <div class="psa b0 l0 fs0-5 ml0-5" style="margin-bottom: -0.2rem">${('0'+props.i).slice(-2)}</div>
      </div>
    `
  }
}