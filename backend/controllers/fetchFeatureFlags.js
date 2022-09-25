/* GET Feature Flags */
const fetchFeatureFlags = async (req, res) => {
    const params = {
        TableName : TABLE_NAME,
        key : {
            flagname
        }
    };
    return await dynamoClient.get(params).promise();
}

module.exports = fetchFeatureFlags;
