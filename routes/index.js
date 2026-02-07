module.exports = app => {
    const {index} = app.controller.indexController;

    app.get('/', index)
}