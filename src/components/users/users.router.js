const express = require('express')
const userRouter = express.Router()



userRouter.get('/', (req, res, next) => {
    res.send('get all users')
})

userRouter.post('/',(req, res, next) => {
    res.send('creat user')
})

userRouter.put('/:id',(req, res, next) => {
    res.send('put user')
})
userRouter.delete('/:id',(req, res, next) => {
    res.send('delete user')
})

module.exports = userRouter