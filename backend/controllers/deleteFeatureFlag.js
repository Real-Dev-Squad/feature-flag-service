const FeatureFlagModel = require('../models/FeatureFlag');

/* Edit Feature Flag */
const editFeatureFlag = async (req, res) => {
    try{
        const { id } = req.params;

        if(req.body !== undefined){
            const deleteRecord = await FeatureFlagModel.findByIdAndRemove(id);
            res.send(deleteRecord);
        }
    }
    catch(err){
       console.log(err)
    }
}

module.exports = editFeatureFlag;
