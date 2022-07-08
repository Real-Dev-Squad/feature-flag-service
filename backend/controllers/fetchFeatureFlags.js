const FeatureFlagModel = require('../models/FeatureFlag');

/* GET Feature Flags */
const fetchFeatureFlags = async (req, res) => {
  try{
    FeatureFlagModel.find({}, function(err, flags) {
      res.json(flags);

   });
  }
  catch(err){
    return `There is an error: ${err}`
  }
}

module.exports = fetchFeatureFlags;
