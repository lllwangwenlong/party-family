const { Router } = require('express')
const router = Router()
const usersModel = require('../model/users')

router.post('/user', (req, res) => {
    let { username, password } = req.body
    let avatarNumber = Math.ceil(Math.random()*8)
    let avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
    if(username) {
        res.json({
            code: 200,
            msg: '注册成功',
        })
        // usersModel.create({ username, password, avatar }).then(data => {
        //     res.json({
        //         code: 200,
        //         msg: '注册成功',
        //         data
        //     })
        // })
    }
})

module.exports = router