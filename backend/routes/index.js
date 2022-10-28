const user = require('./user')
const fixture = require('./fixture')

module.exports = app => {
    app.use('/user', user)
    app.use('/fixture', fixture)
}