const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Hoa Don
const billSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    BillDetails: [
        {
            productId:
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
                },
            retailPrice: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
            },
        }
    ],
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
})

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;