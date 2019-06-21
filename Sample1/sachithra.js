let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
    s3.deleteObject({
        'Bucket': "aws-amplify-hotspaces",
        'Key': "hello world"
    }).promise()
        .then(data => {
            console.log(data);      
            callback(null, { "message": "Successfull : ", data }); 
                 // successful response
            /*
                data = {}
            */
        })
        .catch(err => {
            console.log(err, err.stack);
            callback(null, { "message": "error :", err });
             // an error occurred
        });
}