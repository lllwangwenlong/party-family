const mongoose  = require('mongoose')

const users = new mongoose.Schema({
    avatar: String,
    username: String,
    password: String
}, {versionKey: false, timestamp: { createdAt: 'createTime'}})

module.exports = mongoose.model('users', users)