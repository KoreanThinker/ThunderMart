var secret = require('../../secret.json');


export default async function sendSMS(number: string, content: string) {
    const body = JSON.stringify({
        type: "SMS",
        contentType: "COMM",
        countryCode: "82",
        from: secret.sendSMS.fromNumber,
        to: [
            number
        ],
        subject: "",
        content: content,
    })
    const sms = await fetch('https://api-sens.ncloud.com/v1/sms/services/ncp:sms:kr:257709911726:login_test/messages', {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-ncp-auth-key": secret.sendSMS.authKey,
            "x-ncp-service-secret": secret.sendSMS.serviceSecret
        },
        method: "POST",
        body: body
    })
    const smsJson = await sms.json();
    if (smsJson.error) throw smsJson.error
    return smsJson;
}