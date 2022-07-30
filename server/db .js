const db = require('mongoose')
require('dotenv').config()

db.connect(process.env.DB_URL,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })

module.exports = db