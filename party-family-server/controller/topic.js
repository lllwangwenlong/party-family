const { Router } = require('express')

const router = Router()
const auth = require('./auth')
const topicModel = require('../model/topic')

router.post('/', auth, async (req, res, next) => {
    try {
        const { content } = req.body
        const userId = req.session.user._id
        const topic = await topicModel.create({
            user: userId,
            content
        })
        res.json({
            code : 200,
            data: topic,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let { page = 1, page_size = 10 } = req.query
        page = parseInt(page)
        page_size = parseInt(page_size)
        const count = await topicModel.count()
        const topicList = await topicModel
            .find()
            .skip((page-1)*page_size)
            .limit(page_size)
            .sort({_id: -1})
            .populate({
                path: 'user',
                select: 'nickname avatar'
            })
        console.log(topicList.user);
        res.json({
            code : 200,
            data: topicList,
            count,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

router.get('/:topicId', async (req, res, next) => {//获取单条话题
    try{
        let { topicId } = req.params
        const topicData = await topicModel
            .findById(topicId)
            .populate({
                path: 'user',
                select: 'nickname avatar'
            })
        if(topicData) {
            res.json({
                code: 200,
                data: topicData,
                msg: 'success'
            })
        }else {
            res.json({
                code: 403,
                msg: '话题不存在'
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/deleteTopic/:id', async (req, res, next) => {//删除单条话题
    try{
        let { id } = req.params
        const topicData = await topicModel.findById(id)
        if(topicData) {
            const data = await topicModel.deleteOne({_id: id})
            res.json({
                code: 200,
                data,
                msg: '删除成功'
            })
        }else {
            res.json({
                code: 403,
                msg: '话题不存在'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router