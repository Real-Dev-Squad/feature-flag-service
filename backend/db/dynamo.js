const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "featureflag"

module.exports = {
    dynamoClient, TABLE_NAME
}




// const addFlags = async() => {
//     const params = {
//         TableName : TABLE_NAME,
//         Flag: flags 
//     };
//     return await dynamoClient.put(params).promise();
// };


// const changeFlagStatus = async(flagname) => {
//     const params = {
//         TableName : TABLE_NAME,
//         key : {
//             flagname
//         }
//     };
//     return await dynamoClient.update(params).promise();
// };

// module.exports = {
//     getFeatureFlags,
//     addFlags,
//     getFlag,
//     deleteFlag,
//     changeFlagStatus   
// }
