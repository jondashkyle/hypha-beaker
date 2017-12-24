var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.use(require('./stores/content')())

app.route('*', require('./views/wrapper'))
app.mount('body')