'use strict';

module.exports = function(app){
    const instgramList = require('./controllers/controller');
    const AuthController = require('./controllers/AuthController');
    const PostingController = require('./controllers/PostingController');
    const auth = require('./middlware/auth');

    app.route('/signup').post(AuthController.signUp)
    app.route('/sigin').post(AuthController.sigIn)

    app.route('/').get(instgramList.index)
    app.route('/users').get(auth.isAuth,instgramList.users)

    app.route('/posts').post(auth.isAuth,PostingController.create)
    app.route('/posts').get(auth.isAuth,PostingController.getPosts)
    app.route('/posts/:id').delete(auth.isAuth,PostingController.destroyPost)
    app.route('/posts/:id').put(auth.isAuth,PostingController.updatePost)

    // app.route('/photos').get(instgramList.getPhoto)

}