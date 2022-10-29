const user = require('./user')
const fixture = require('./fixture')
const tasks = require('./tasks')

module.exports = app => {
    app.use('/user', user)
    app.use('/fixture', fixture)
    app.use('/tasks', tasks)
}