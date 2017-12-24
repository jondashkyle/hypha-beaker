module.exports = plugin

function plugin (state, emitter) {
  emitter.on(state.events.PUSHSTATE, function () {
    window.scrollTo(0, 0)
  })
}