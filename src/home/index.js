var page = require('page')
var empty = require('empty-element')

var templateHome = require('./template.js')

page('/', function (ctx, next) {
	var main = document.querySelector('.main-container')
	empty(main).appendChild(templateHome)
})