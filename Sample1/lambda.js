let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    console.log("check 1 ");
    sns.getTopicAttributes({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });


    console.log("test indunil");
}