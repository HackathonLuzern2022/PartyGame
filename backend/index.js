const express = require('express')
const app = express()
const mountRoutes = require('./routes')

const port = 4000

mountRoutes(app)

app.listen(port, () => {
    console.log(`Party Game BE listening on port http://localhost:${port}`)
})