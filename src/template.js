
const template = (data) => {
    let s
    if (data){
        const { status, failed, subject, user, branch, vcs_revision, build_num, build_url, committer_email, committer_name, build_time_millis, start_time, stop_time, previous } = data

        console.log('data: ', data)
        console.log('status: ', status)
        console.log('user: ', user)

        s =
        {
            "attachments": [
                {
                    "text": `<${build_url}|#${build_num}> - รายงานสถานะ Circleci`,
                    "color": `${failed} ? "danger" : "good"`,
                    "fields": [
                        {
                            "title": "Commit",
                            "value": `<https://github.com/appman-agm/azay-sign-mapper/commit/${vcs_revision}> (${subject})`,
                            "short": true
                        },
                        {
                            "title": "Status",
                            "value": `${failed} ? "Fail" : "Success"`,
                            "short": true
                        },
                        {
                            "title": "Start time",
                            "value": start_time,
                            "short": true
                        },
                        {
                            "title": "Stop time",
                            "value": stop_time,
                            "short": true
                        },
                        {
                            "title": "Build Time",
                            "value": `${build_time_millis}` ,
                            "short": true
                        }
                    ],
                    "footer": `by <https://github.com/${user.login}|${user.name}>`,
                    "footer_icon": user.avatar_url,
                    "ts": new Date().getTime()
                }
            ]
        }
    }
    return s
}

module.exports = template