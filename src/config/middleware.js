const { json } = require("express")
const morgan = require('morgan')

module.exports = {
    init(app){
        app.use(json());
        app.use(morgan('dev'))
    }
    
}