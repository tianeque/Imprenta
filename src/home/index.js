var page = require('page')

page('/', function (ctx, next) {
	var main = document.querySelector('.main-container')
	main.innerHTML = 'Home';
})
