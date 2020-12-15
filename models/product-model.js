const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    barcode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        require: true
    },
    inventoryNumber: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    originalPrice: {
        type: String,
        require: true,
    },
    retailPrice: {
        type: String,
        require: true,
    },
    wholePrice: {
        type: String,
        require: true,
    },
    receivedDate: { //ngay bo sung san pham
        type: String,
        require: true,
    },
    remindValue: { //so luong toi thieu hang hoa con ton kho
        type: String,
        require: true,
    },
    isDeleted: {
        type: Boolean,
        require: true,
        default: false
    },
    ProductTypes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ProductType'
        }
    ],
    Features: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feature'
        }
    ]
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;