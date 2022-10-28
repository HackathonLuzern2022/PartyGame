const Router = require('express-promise-router')
const router = new Router()

const db = require('../db')

module.exports = router

router.get('/:id', async (req, res) => {
  const { rows } = await db.query('SELECT NOW()')
  res.send(rows[0])
})