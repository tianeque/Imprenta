var page = require('page')
var yo = require('yo-yo')
var empty = require('empty-element')

var el = require('./template.js')

page('/cotizador', function (ctx, next) {
	var main = document.querySelector('.main-container')
	empty(main).appendChild(el)
})