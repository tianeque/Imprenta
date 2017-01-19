var page = require('page')
var empty = require('empty-element')

var templateCotizador = require('./template.js')
var templateMenu = require('../menu/template.js')

page('/cotizador', function (ctx, next) {
	var menu = document.querySelector('.menu-principal')
	var main = document.querySelector('.main-container')
	empty(menu).appendChild(templateMenu)
	empty(main).appendChild(templateCotizador)
})