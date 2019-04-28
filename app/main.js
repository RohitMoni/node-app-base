// Detect our environment. This affects everything, including our configuration so we need to do this first.
const env = process.env.NODE_ENV
console.log(`Running application in ${env} environment...`)

const fs = require('fs')
const http = require('http')
const https = require('https')
const path = require('path')

const express = require('express')

const appController = require('./controllers/appController');

// Read Configuration file
// Need to do this early so we can use configuration options for everything else
console.log(`Loading configuration file: \"./config/${env}.app.config\"`)
const configFile = fs.readFileSync(`./config/${env}.app.config`)
const config = JSON.parse(configFile)

const app = express()

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// static files
app.use(express.static(path.join(__dirname, '/static')))

// Set up our controller with the app
appController(app)

// Start up the relevant servers (http, https) based on config
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
