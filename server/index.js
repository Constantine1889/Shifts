const express = require('express')
require('dotenv').config()
const cors = require('cors')


const PORT = process.env.PORT || 7000;
const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message:"WORKING"})
})

async function start() {
    try {
        app.listen(PORT,()=>console.log(`server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()

