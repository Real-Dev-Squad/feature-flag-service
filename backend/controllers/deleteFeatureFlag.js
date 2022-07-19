const FeatureFlagModel = require('../models/FeatureFlag');

/* Edit Feature Flag */
const deleteFeatureFlag = async (req, res) => {
    try{
        const { id } = req.params;
        
        if(id !== undefined){
            const deleteRecord = await FeatureFlagModel.findByIdAndRemove(id);
            res.send(deleteRecord);
        }
    }
    catch(err){
       console.log(err)
    }
}

module.exports = deleteFeatureFlag;
