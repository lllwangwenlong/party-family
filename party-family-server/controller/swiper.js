const { Router } = require('express')
const router = Router()
const swiperModel = require('../model/swiper')
const auth = require('./auth')

router.post('/', auth, async (req, res, next) => { //添加轮播图
    try {
        let { headerImg, title, newsId, sort, status } = req.body
        const data = await swiperModel.create({ headerImg, title, newsId, sort, status })
        res.json({
            code: 200,
            data,
            msg: '添加轮播图成功'
        })
    }catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {//获取全部轮播图信息
    try {
        let {page=1, page_size=10} = req.query
        page = parseInt(page)
        page_size = parseInt(page_size)
        const dataList = await swiperModel
            .find()
            .skip((page-1)*page_size)
            .limit(page_size)
            .sort({ sort: -1, _id: -1})
            .populate({
                path: 'newsId',
            })
        console.log(dataList);
        res.json({
            code: 200,
            data: dataList,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {//获取单个轮播图信息
    try {
        let { id } = req.params
        const data = await swiperModel
            .findById(id)
        res.json({
            code: 200,
            data ,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.patch('/:id', auth, async (req, res, next) => {//编辑轮播图信息
    try {
        let { id } = req.params
        let { headerImg, title, newsId, sort, status} = req.body
        const data = await swiperModel.findById(id)
        const updateData = await data.update({$set: {headerImg, title, newsId, sort, status}})
        res.json({
            code: 200,
            data: updateData ,
            msg: '修改轮播图成功'
        })
    }catch (err) {
        next(err)
    }
})

module.exports = router