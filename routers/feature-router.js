const express = require('express')
const router = express.Router()

const ProductModel = require('../models/product-model')
const FeatureModel = require('../models/feature-model')

router.get('/', (req, res) => {
    res.status(200).json('Ok~')
})

router.post("/add", async (req, res) => {
    try {
        var feature = new FeatureModel(req.body);
        var result = await feature.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;