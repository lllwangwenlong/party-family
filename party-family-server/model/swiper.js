const mongoose = require('mongoose')

const swiper = new mongoose.Schema({
    headerImg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    newsId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'news',
        required: true
    },
    sort: {
        type: String,
        default:1
    },
    status: {
        type: String,
        default: 1
    },
}, {versionKey: false, timestamps: { createdAt: 'create_time', updatedAt: 'update_time'}})

module.exports = mongoose.model('swiper', swiper)
