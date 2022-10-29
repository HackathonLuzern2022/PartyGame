const Router = require('express-promise-router')
const router = new Router()

const db = require('../db')

module.exports = router

router.get('/', async(req, res) => {
    const { hardness } = req.query
    const { rows } = await db.query('SELECT * FROM tasks WHERE hardness = $1', [hardness])
    res.send(rows)
})