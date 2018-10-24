const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/party-family', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
    console.log('connection success')
})

module.exports = db