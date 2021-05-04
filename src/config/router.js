const postRouter = require('../components/posts/posts.router')
const userRouter = require('../components/users/users.router')

module.exports = {
    init(app){
        app.use('/users', userRouter),
        app.use('/posts', postRouter)
    }
}