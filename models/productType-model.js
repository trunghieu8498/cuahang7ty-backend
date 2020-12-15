const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mat Hang
const productTypeSchema = new Schema({
    typeName: {
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

const ProductType = mongoose.model('ProductType', productTypeSchema);
module.exports = ProductType;