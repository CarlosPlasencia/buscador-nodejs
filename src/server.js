import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import swig from 'swig' 
import {local} from './config/server'

import routers from './config/routers'

const app = express(),
			port = process.env.PORT || 8000


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//app.use(express.static('./public'))
local(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/buscador1')

routers(app)
app.listen(port)

console.log('running in localhost:' + port)