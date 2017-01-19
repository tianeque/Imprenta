var page = require('page')

var main = document.querySelector('.main-container')

page('/', function (ctx, next) {
	main.innerHTML = 'Home';
})

page('/cotizador', function (ctx, next) {
	main.innerHTML = 'Cotizador';
})

page()
