const slackChannelId = process.env.CHANNEL_ID || ''
const slackToken = process.env.TOKEN || ''

module.exports = {
    sendMessge: (msg) => {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'Authorization': `Bearer ${slackToken}` },
            data: { 'channel': slackChannelId, 'text': msg },
            url: 'https://slack.com/api/chat.postMessage'
        }

        return axios(options)    
    }
}