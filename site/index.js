var html = require('choo/html')
var choo = require('choo')
require('./design')

var app = choo()
app.use(require('choo-dat-hypha')())
app.use(require('./plugins/scroll'))
app.use(require('./plugins/ui'))

app.route('*', require('./views/wrapper'))
app.mount('body')