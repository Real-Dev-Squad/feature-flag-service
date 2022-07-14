const FeatureFlagModel = require('../models/FeatureFlag');

/* GET Feature Flags */
const fetchFeatureFlags = async (req, res) => {
  try{
    const featureFlags = await FeatureFlagModel.find({});
    res.json(featureFlags);
  }
  catch(err){
    return `There is an error: ${err}`
  }
}

module.exports = fetchFeatureFlags;
