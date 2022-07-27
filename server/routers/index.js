const Router = require('express')
const router = new Router()

//Controllers

router.get('/',(req,res)=>{
    res.json({message:"WORKING"})
})



module.exports = router