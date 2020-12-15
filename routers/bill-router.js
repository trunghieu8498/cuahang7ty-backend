const express = require('express')
const router = express.Router()

const ProductModel = require('../models/product-model')
const BillModel = require('../models/bill-model')


router.get("/", (req, res) => {
    BillModel.find({}, (err, bill) => {
        if (!err)
            res.status(200).json(bill)
        else
            res.status(400).json({ msg: 'Không tìm được dữ liệu' })
    })
})

router.get("/:id", (req, res) => {
    BillModel.findById(req.params.id, (err, product) => {
        if (!err)
            res.status(200).json(product)
        else
            res.status(400).json({ msg: 'Đối tượng không tồn tại!' })
    })
})

router.post("/add", async (req, res) => {
    try {
        var bill = new BillModel(req.body)
        var result = await bill.save()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: 'Lưu thất bại' })
    }
})

module.exports = router
