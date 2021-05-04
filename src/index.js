const express = require('express')
const middleware = require('./config/middleware')
const router = require('./config/router')

const app = express()

middleware.init(app)
router.init(app)



app.listen(3000,() => {
    console.log('server is running')
})