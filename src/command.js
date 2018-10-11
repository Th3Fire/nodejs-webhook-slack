module.exports = {
    circleciCommand: (args) => {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', 'circle-token': process.env.CIRCLECI_TOKEN },
            data: { 'build_parameters': { 'CIRCLE_JOB': 'build'} },
            url: 'https://circleci.com/api/v1.1/project/github/appman-agm/azay-sign-mapper/tree/developer'
        }

        return axios(options)  
    }
}