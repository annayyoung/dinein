const path = require('path')
const express = require('express')
const router = express.Router()
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

router.get('/add-ingredient', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views','add-ingredient.html'))
    //   console.log('In another middleware')
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
   })
   
router.post('/add-ingredient', (req, res, next) => {
       fs.writeFileSync(path.join(__dirname, '../', 'ingredients.txt'), 'candy')
       res.redirect('/')
   })

module.exports=router