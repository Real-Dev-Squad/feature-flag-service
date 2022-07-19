const FeatureFlagModel = require('../models/FeatureFlag');

/* Edit Feature Flag */
const editFeatureFlag = async (req, res) => {
    try{
        const { id } = req.params;

        if(req.body !== undefined){
            const update = await FeatureFlagModel.findByIdAndUpdate(id, { $set: req.body});
            res.send(update);
        }
    }
    catch(err){
       console.log(err)
    }
}

module.exports = editFeatureFlag;
