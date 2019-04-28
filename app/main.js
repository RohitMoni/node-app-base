const express = require('express')
const path = require('path')
const appController = require('./controllers/appController');

const app = express()
const port = 3000

// set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// static files
app.use(express.static(path.join(__dirname, '/static')))

appController(app)

app.listen(port, () => console.log(`App listening on port ${port}!`))