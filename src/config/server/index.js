const express = require('express')

const staticFileDirs = function (app) {
	app.use('/static', express.static('src/public'));
	
}

export function local (app) {
	app.locals.prod = false
	
	app.locals.STATIC_URL = 'http://localhost:8000/';

	/* STATIC FILES */
	app.use(express.static(__dirname + '/../../public'));
	/* MEDIA FILES */
	//app.use(qt.static(__dirname + '/../../'))
	
}

