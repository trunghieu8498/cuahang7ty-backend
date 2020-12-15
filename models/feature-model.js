const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Dac Tinh
const featureSchema = new Schema({
    featureName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isDeleted: {
        type: String,
        require: true,
        default: false
    },
    Products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
})

const Feature = mongoose.model('Feature', featureSchema);
module.exports = Feature;