var html = require('choo/html')

module.exports = component

function component (id, props) {
  if (!id) return 
  props = props || { }
  var ratio = props.ratio || 56.25

  return html`
    <div class="psr w100" style="padding-bottom: ${ratio}%">
      <iframe
        class="psa t0 l0 h100 w100 b0 r0"
        src="https://www.youtube.com/embed/${id}?rel=0&amp;theme=dark&amp;controls=1&amp;showinfo=0"
        frameborder="0"
        gesture="media"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  `
}
