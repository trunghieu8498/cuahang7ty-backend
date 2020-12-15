const express = require('express')
const router = express.Router()

const ProductModel = require('../models/product-model')
const ProductTypeModel = require('../models/productType-model')
const FeatureModel = require('../models/feature-model')

router.get("/", (req, res) => {
    ProductModel.find({}, (err, product) => {
        if (!err)
            res.status(200).json(product)
        else
            res.status(400).json({ msg: 'Không tìm được dữ liệu' })
    }
)})

router.get("/:id", (req, res) => {
    // console.log(res.params)
    ProductModel.findOne({ barcode: req.params.id }, (err, product) => {
        if (!err)
            res.status(200).json(product)
        else
            res.status(400).json({ msg: 'Đối tượng không tồn tại!' })
    })
})

router.post('/add', async (req, res) => {
    try {
        console.log(req.body)
        var product = new ProductModel(req.body)
        var result = await product.save()
        console.log(result)
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/update/inventorynumber', async (req,res) => {
    try{
        const {productId, quantity} = req.body
        ProductModel.findById(productId,(err,product)=>{
            if(!err){
                product.inventoryNumber -= quantity
                product.save()
                res.status(200).json({msg:'Đã cập nhật số lượng tồn'})
            }
            else
            res.status(400).json(err)
        })
    }
    catch{
        res.status(400).json(err)
    }
})

// router.post("/update/inventorynumber", async (req, res) => {
//     try {
//         const { BillDetails } = req.body
//         console.log(BillDetails)
//         BillDetails.forEach(BillDetail => {
//             const { productId, quantity } = BillDetail
//             ProductModel.findById(productId, (err, product) => {
//                 if (!err){
//                     product.inventoryNumber -= quantity
//                     product.save()
//                 }
//             })
//         })
//         // res.status(200).json({msg:'Đã cập nhật lại số lượng', result})
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// })


module.exports = router

// //get product by id and list orderDetail embed
// router.get("/:id", (req, res) => {

//     let arrOrderDetail = []
//     // console.log(req.params.id)
//     Product.findById(req.params.id, (err, product) => {
//         if (err) throw err
//         //return res.status(200).json({ product })
//         const orderDetails = product.get('orderDetails')
//         if (orderDetails.length > 0)
//             return orderDetails.map(id => {

//                 return OrderDetail.findById(id, (err, orderDetail) => {

//                     if (err) throw err
//                     arrOrderDetail = [...arrOrderDetail, orderDetail]

//                 })
//                     .then(() => {
//                         return res.status(200).json(product)
//                         // return res.status(200).json({ product, arrOrderDetail })
//                     })
//             })
//         else
//             return res.status(200).json(product)
//     })
// })

// router.get("/", (req, res) => {
//     Product.find({}, (err, products) => {
//         if (!err)
//             res.status(200).json(products)
//         else {
//             res.status(400).json({ msg: 'loi' })
//         }
//     })
// })

// router.post('/getproducts', (req, res) => {
//     Product.find({ isDeleted: false })
//         .then(products => {
// res.status(200).json(products)
//         })
//         .catch(err=> res.status(400).json({msg: 'Không tìm được dữ liệu', err}))
// })


// //create driver
// router.post('/create', (req, res) => {
//     const product = new Product(req.body)
//     product.save()
//         .then(
//             res.status(200).json(product)
//         )
//         .catch(err => {
//             res.status(400).json({ msg: 'Hệ thống gặp lỗi khi lưu thông tin' })
//         })
// })

// //update Product
// router.put("/update/:id", (req, res) => {

//     const newData = {
//         productName: req.body.productName,
//         price: req.body.price,
//         urlImage: req.body.urlImage
//     }

//     Product.findByIdAndUpdate(req.params.id, newData)
//         .then(product => {
//             res.status(200).json(product)
//         })
//         .catch(err => {
//             res.status(400).json({ msg: 'Cập nhật thất bại !' })
//         })
// });

// //delete (ko xoa that su)
// router.put("/delete/:id", (req, res) => {
//     Product.findById(req.params.id, (err, product) => {

//         product.isDeleted = true; //thay doi isDeleted

//         product.save()
//             .then(() => {
//                 res.json('object deleted successfull');
//             })
//             .catch(err => {
//                 res.status(400).send("error: " + err);
//             });
//     })
// })
