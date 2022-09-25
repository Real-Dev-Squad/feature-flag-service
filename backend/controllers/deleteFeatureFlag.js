/* Edit Feature Flag */
const deleteFeatureFlag = async (req, res) => {
    const params = {
        TableName : TABLE_NAME,
        key : {
            flagname
        }
    };
    return await dynamoClient.delete(params).promise();
}

module.exports = deleteFeatureFlag;
