// const { db } = require('../models/FeatureFlag');
const FeatureFlagModel = require('../models/FeatureFlag');

/* Edit Feature Flag */
const editFeatureFlag = async (req, res) => {
    try{
        if(req.body !== undefined){
            const update = await  FeatureFlagModel.findByIdAndUpdate(req.params.id, { $set: req.body});
            res.send(update);
        }
    }
    catch(err){
       console.log(err)
    }
}

module.exports = editFeatureFlag;
