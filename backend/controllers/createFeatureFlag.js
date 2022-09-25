const { dynamoClient, TABLE_NAME }  = require('../db/dynamo');

/* Create Feature Flag */
const createFeatureFlag = async () => { 
    const params = {
        TableName : TABLE_NAME,
        Flag: flags 
    };
    return await dynamoClient.put(params).promise();
}

module.exports = createFeatureFlag;
