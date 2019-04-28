const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')
const appController = require('./controllers/appController');

// Read Configuration file
// Todo: Need to be able to switch between files depending on environment
const configFile = fs.readFileSync('./config/dev.app.config')
const config = JSON.parse(configFile)

const app = express()

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// static files
app.use(express.static(path.join(__dirname, '/static')))

appController(app)

if (config.server.http.enabled) {
    const httpPort = config.server.http.port
    http.createServer(app).listen(httpPort, () => console.log(`App serving http on port ${httpPort}!`))
}

if (config.server.https.enabled) {
    const httpsOptions = {
        key: fs.readFileSync(config.server.https.key, 'utf-8'),
        cert: fs.readFileSync(config.server.https.cert, 'utf-8'),
    }

    const httpsPort = config.server.https.port
    https.createServer(httpsOptions, app).listen(httpsPort, () => console.log(`App serving https on port ${httpsPort}!`))
}
