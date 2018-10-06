const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('post work! : ', req.body)
    res.send('Work!')
})

app.get('/webhook', (req, res) => {
    res.send('Work!')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))