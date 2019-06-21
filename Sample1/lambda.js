let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
    sns.setTopicAttributes({
        AttributeName: 'DisplayName',
        AttributeValue: 'indunil',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            callback(null, { "message": "Successfully y executed" })
            // your code goes here
        })
        .catch(err => {
            callback(null, { "message": "Successfully n  executed" })
            // error handling goes here
        });
        callback(null, {"message": "Successfully gggg executed"});
}