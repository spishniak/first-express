const express = require('express')
const postRouter = express.Router()



postRouter.get('/', (req, res, next) => {
    res.send('get all post')
})

postRouter.post('/',(req, res, next) => {
    res.send('creat post')
})

postRouter.put('/:id',(req, res, next) => {
    res.send('put post')
})
postRouter.delete('/:id',(req, res, next) => {
    res.send('delete post')
})

module.exports = postRouter