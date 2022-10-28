const express = require('express')
const app = express()
const port = 4000

const index = require('./routes/index')

app.use('/', index)


app.listen(port, () => {
    console.log(`Party Game BE listening on port ${port}`)
})