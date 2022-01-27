// importing files with node js
const http = require('http');

const express = require('express')


const bodyParser = require('body-parser')

const homeRoutes = require('./routes/home-page')
const ingredientRoutes = require('./routes/add-ingredient')

const app = express()

//parser
app.use(bodyParser.urlencoded({extended:false}))


//app.use('/admin', adminRoutes)
//app.use(shopRoutes)
app.use(homeRoutes)
app.use(ingredientRoutes)
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')

})
//const routes = require('./routes')
//const { ifError } = require('assert');
// function rqListener(req, res) {

// }

//console.log(routes.someText)

app.listen(3000)
