const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

const template = require('./template')

const port = process.env.PORT || 3000
const gitRepo = process.env.GIT_REPO || ''

const slackChannelId = process.env.CHANNEL_ID || ''
const slackToken = process.env.TOKEN || ''

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    if (req.body) {
        const result = JSON.stringify(template(slackChannelId, gitRepo, req.body))
        console.log('result : ', result)

        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${slackToken}` },
            data: result,
            url: 'https://slack.com/api/chat.postMessage'
        }

        axios(options)
            .then((res) => {
                console.log('success : ', res)
            })
            .catch((err) => {
                console.log('err :', err)
            })

    }
    res.send('GOT IT!')
    res.status(200)

})

app.post('/event', (req, res) => {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).jsonp({ status: 200, message: 'OK', challenge: req.body.challenge })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
