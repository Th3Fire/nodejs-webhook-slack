const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

const template = require('./template')

const port = process.env.PORT || 3000

const slackChannelId = process.env.CHANNEL_ID || ''
const slackToken = process.env.TOKEN || ''

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    if (req.body) {
        console.log(req.body)
        const result = template(req.body)

        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${slackToken}` },
            data: { channel: "GD9MHGK0X", result },
            url: 'https://slack.com/api/chat.postMessage'
        }

        axios(options)
            .then((res) => {
                console.log('res :', res)
            })
            .catch((err) => {
                console.log('err :', err)
            })

    }else {
        res.send('GOT IT!')
        res.status(200)
    }

})

app.listen(port, () => console.log(`app listening on port ${port}!`))