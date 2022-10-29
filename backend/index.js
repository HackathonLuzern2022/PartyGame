const express = require('express')
const app = express()
const cors = require('cors')
const mountRoutes = require('./routes')

const port = 4000

app.use(cors())

mountRoutes(app)

app.listen(port, () => {
    console.log(`Party Game BE listening on port http://localhost:${port}`)
})