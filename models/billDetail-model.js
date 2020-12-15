const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bill con
const billDetailSchema = new Schema({
    quantity: {
        type: String,
        require: true
    },
    isDeleted: {
        type: String,
        require: true,
        default: false
    },
    Product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
})

const BillDetail = mongoose.model('BillDetail', billDetailSchema);
module.exports = BillDetail;