const { Router } = require('express')
const router = Router()
const adminUserModel = require('../model/adminUser')

router.post('/', async (req, res, next) => {//增加管理员
    console.log(req.body)
    console.log(1111);
    try{
        let {username, nickname, avatar, password, desc, job, phone, sex} = req.body
        const data = await adminUserModel.create({username, nickname, avatar, password, desc, job, phone, sex})
        res.json({
            code: 200,
            msg: '新建管理员用户成功',
            data
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router