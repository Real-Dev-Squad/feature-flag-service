const mongoose = require('mongoose');
const schema = mongoose.Schema;

const FeatureFlagSchema = schema({
    name: {
        type: String,
        require: true
    },
    roleUsers: {
        type: String,
        require: true
    },
    isEnable: {
        type: Boolean,
        require: true
    },
    createdOn: {
        type: String,
        require: true
    },
    createdBy: {
        type: String,
        require: true
    },
    modifyBy: {
        type: String,
        require: true
    },
    modifyOn: {
        type: String,
        require: true
    }
})

const FeatureFlagModel = mongoose.model('FeatureFlag', FeatureFlagSchema );
module.exports = FeatureFlagModel;