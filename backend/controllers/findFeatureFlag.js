const FeatureFlagModel = require('../models/FeatureFlag');

/* FIND Feature Flag */
const findFeatureFlags = async (req, res) => {
    const { flagName } = req.params;
  try{
    FeatureFlagModel.findOne({name : flagName}, function(err, flag) {
      if(flag === null){
        res.status(404).json("404");
        return false;
      }
        res.json(flag);
        res.send();
   });
  }
  catch(err){
    res.send(err);
  }
}

module.exports = findFeatureFlags;
