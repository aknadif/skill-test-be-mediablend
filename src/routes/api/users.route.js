const usersController = require('../../controller/users.controller');

module.exports = (app) => {
    app.get('/api/users', usersController.findAll)
    app.post('/api/users', usersController.create)
    app.patch('/api/users/:id', usersController.update)
    app.delete("/api/users/:id", usersController.delete);
}