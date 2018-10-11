const axios = require('axios')

module.exports = {
    sendMessge: (msg) => {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${process.env.TOKEN}` },
            data: { 'channel': process.env.CHANNEL_ID, 'text': msg },
            url: 'https://slack.com/api/chat.postMessage'
        }

        return axios(options)    
    },
    sendEphemeralMessge: (msg) => {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${process.env.TOKEN}` },
            data: { 'channel': process.env.CHANNEL_ID, 'text': msg },
            url: 'https://slack.com/api/chat.postEphemeral'
        }

        return axios(options)    
    }
}