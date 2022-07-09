const FeatureFlagModel = require('../models/FeatureFlag');

/* FIND Feature Flag */
const findFeatureFlags = async (req, res) => {
    const { flagName } = req.params;
  try{
    FeatureFlagModel.findOne({flagName}, function(err, flag) {
        res.json(flag);
        res.send();
   });
  }
  catch(err){
    res.send(err);
  }
}

module.exports = findFeatureFlags;
