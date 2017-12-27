module.exports = ui

function ui (state, emitter, app) {
  state.visited = { }
  state.online = navigator.onLine
  state.p2p = false
  
  state.events.VISITED = 'visited'
  emitter.on(state.events.VISITED, handleVisit)

  function handleVisit (data) {
    state.visited[data.url] = true
  }
}
