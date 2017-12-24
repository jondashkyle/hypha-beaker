var html = require('choo/html')

module.exports = imageLightbox

function imageLightbox (props) {
  if (!props) return

  return html`
    <div
      class="psf t0 l0 r0 b0 curp"
      onclick=${handleClick}
    >
      <img
        src="${props.image.path}"
        class="h100 w100 psa t0 l0 r0 b0 ofct"
      >
    </div>
  `

  function handleClick (event) {
    if (typeof props.handleClick === 'function') {
      props.handleClick(event)
    }
  }
}