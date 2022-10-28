const Router = require('express-promise-router')
const router = new Router()

const db = require('../db')

module.exports = router

router.get('/', async(req, res) => {
    const { rows } = await db.query('SELECT * FROM TASKS')
    res.send(JSON.stringify(rows))
})