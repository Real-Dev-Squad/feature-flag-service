/* FIND Feature Flag */
const findFeatureFlag = async (req, res) => {
    const params = {
        TableName : TABLE_NAME,
    };
    console.log(params)
    const flags =  await dynamoClient.scan(params).promise();
    console.log(flags);
    return flags;
}

module.exports = findFeatureFlag;
