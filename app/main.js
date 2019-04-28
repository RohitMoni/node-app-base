const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')
const appController = require('./controllers/appController');

const app = express()

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// static files
app.use(express.static(path.join(__dirname, '/static')))

appController(app)

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'encryption/key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, 'encryption/certificate.pem'), 'utf-8'),
}

const httpPort = 8080
const httpsPort = 8443

http.createServer(app).listen(httpPort, () => console.log(`App serving http on port ${httpPort}!`))
https.createServer(httpsOptions, app).listen(httpsPort, () => console.log(`App serving https on port ${httpsPort}!`))