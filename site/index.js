var html = require('choo/html')
var choo = require('choo')
require('./design')

var app = choo()
app.use(require('./plugins/scroll'))
app.use(require('./stores/content'))

app.route('*', require('./views/wrapper'))
app.mount('body')