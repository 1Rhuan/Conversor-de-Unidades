const express = require('express')
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
        res.send('ola mundo')
})

app.listen(8080, () => {
        console.log('rodando em 8080')
})
