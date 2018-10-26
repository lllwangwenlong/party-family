const { Router } = require('express')
const router = Router()
const auth = require('./auth')
const categoryModel = require('../model/category')

router.get('/', async (req, res, next) => {
    try {
        const dataList = await categoryModel.find()
        res.json({
            code: 200,
            data: dataList,
            msg: 'success'
        })
    }catch (err) {
       next(err)
    }
})


module.exports = router