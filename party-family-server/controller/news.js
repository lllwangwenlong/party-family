const { Router } = require('express')
const router = Router()
const auth = require('./auth')
const newsModel = require('../model/news')

router.post('/', auth, async (req, res, next) => {
    try {
        let { title, content, contentText, headerImg, author, type } = req.body
        const news = await newsModel.create({ title, content, contentText, headerImg, author, type })
        res.json({
            code: 200,
            msg: '添加新闻成功',
            news
        })
    }catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {//获取全部新闻信息
    try {
        let { page = 1, page_size = 10 } = req.query
        page = parseInt(page)
        page_size = parseInt(page_size)
        const dataList = await newsModel
            .find()
            .skip((page - 1)*page_size)
            .limit(page_size)
            .sort({_id: -1})
            .populate({
                path: 'author',
                select: '-password'
            })
            .populate({
                path: 'type',
            })
        res.json({
            code: 200,
            data: dataList,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.delete('/deleteNew/:id', async (req, res, next) => {//删除单条新闻
    try{
        let { id } = req.params
        const newData = await newsModel.findById({_id: id})
        if(newData) {
            const data = await newsModel.deleteOne({_id: id})
            res.json({
                code: 200,
                data,
                msg: '删除成功'
            })
        }else {
            res.json({
                code: 403,
                msg: '新闻不存在'
            })
        }
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {//获取单个新闻信息
    try {
        const { id } = req.params
        const data = await newsModel
            .findById(id)
            .populate({
                path: 'admin_user',
                select: '-password'
            })
            .populate({
                path: 'type',
            })
        res.json({
            code: 200,
            data: data,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        let { title, content, contentText, headerImg, author, type, look_num } = req.body
        let { id } = req.params
        const data = await newsModel.findById(id)
        console.log(data);
        const updateData = await newsModel.update({$set: { title, content, contentText, headerImg, author, type, look_num }})
        res.json({
            code: 200,
            data: updateData,
            msg: '修改新闻成功'
        })
    }catch (err) {
        next(err)
    }
})

module.exports = router
