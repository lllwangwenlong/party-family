const { Router } = require('express')
const router = Router()
const adminUserModel = require('../model/adminUser')
const auth = require('./auth')

router.post('/', auth, async (req, res, next) => {//增加管理员
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

router.get('/', auth, async (req, res, next) => {//获取管理员信息
    try{
        const data = await adminUserModel.find()
        res.json({
            code: 200,
            msg: '获取管理员信息成功',
            data
        })
    } catch (err) {
        next(err)
    }
})
//获取单个管理员信息
router.get('/:id', auth, async (req, res, next) => {//获取单个管理员信息
    try{
        let { id } = req.params
        const data = await adminUserModel
            .findById({_id: id})
            .select('-password')
        res.json({
            code: 200,
            msg: 'success',
            data
        })
    } catch (err) {
        next(err)
    }
})
// /admin/adminUser/deleteUser/:id
router.delete('/deleteUser/:id', auth, async (req, res, next) => {//删除管理员
    try{
        let { id } = req.params
        const user = await adminUserModel.findById({_id: id})
        if(user) {
            const data = await adminUserModel.deleteOne({_id: id})
            res.json({
                code: 200,
                data,
                msg: '删除成功'
            })
        }else {
            res.json({
                code: 403,
                msg: '没有该用户'
            })
        }
    } catch (err) {
        next(err)
    }
})
// /admin/adminUser/login 路由
router.post('/login', async (req, res, next) => {//登录
    try {
        const{ username, password } = req.body

        if(username&&password) {
            const user = await adminUserModel.findOne({username})
            if(user){ //判断有没有此用户
                if(password == user.password){ //判断密码是否正确
                    req.session.user = user
                    res.json({
                        code: 200,
                        msg: '登录成功',
                        data:user
                    })
                }else {
                    res.json({
                        code: 401,
                        msg: '密码错误'
                    })
                }
            }else {
                res.json({
                    code: 401,
                    msg: '该用户不存在'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '缺少必要参数'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router