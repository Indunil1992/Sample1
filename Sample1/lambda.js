let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function(event, context, callback) {
    
    callback(null, {"message": "Successfully executed jsb"});
s3.getBucketLocation({
    'Bucket': "sigma-slappforge-318300609668-us-east-1-build-artifacts-922355"
}).promise()
    .then(data => {
        console.log(data);           // successful response
        /*
        data = {
            LocationConstraint: "us-west-2"
        }
        */
    })
    .catch(err => {
        console.log(err, err.stack); // an error occurred
    });
