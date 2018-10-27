const { Router } = require('express')

const router = Router()
const auth = require('./auth')
const commonModel = require('../model/common')
const topicModel = require('../model/topic')

router.post('/', auth, async (req, res, next) => {
    try {
        let { content, topic_id } = req.body
        const userId = req.session.user._id

        const topic = await topicModel.findById(topic_id)
        //查找出需要掺入评论的话题

        if(topic) {
            common = await commonModel.create({ content, user:userId, topic: topic_id })

            //将评论放入话题中的common中
            await topic.update({$push: {common: common._id}})
            await topic.save()

            res.json({
                code : 200,
                msg: 'success',
                data: common
            })
        }else {
            res.json({
                code: 403,
                msg: '没有找到该话题'
            })
        }
    }catch (err) {
        next(err)
    }
})

router.get('/:topicId', async (req, res, next) => {
    try {
        const topicId = req.params.topicId
        const commonList = await commonModel
            .find({topic: topicId})
            .populate({
                path: 'user',
                select: 'username, avatar'
            })
        //查找出需要掺入评论的话题
        res.json({
            code: 200,
            data: commonList,
            msg: 'success'
        })
    }catch (err) {
        next(err)
    }
})

module.exports = router