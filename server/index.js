/**
 * TODO
 * 1.Authorization
 * 2.CRUD to finish
 */
const express = require('express')
require('dotenv').config()
const cors = require('cors')

const router = require('./routers/index')
const errorHandler = require('./middlewares/ErrorHandlingMiddleware')


const PORT = process.env.PORT || 7000;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)
 
//Error handling , have to be last middleware
app.use(errorHandler)


const start = async () => {
    try {
        app.listen(PORT,()=>console.log(`server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()

