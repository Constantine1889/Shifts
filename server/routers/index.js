const Router = require('express')
const router = new Router()
//Routers
const userRouter = require('./UserRouter')
const constraintsRouter = require('./ConstraintsRouter')
const workDayRouter = require('./WorkDayRouter')
const positionRouter = require('./PositionRouter')
const shiftRouter = require('./ShiftRouter')
const siteRouter = require('./SiteRouter')
const scheduleRouter = require('./ScheduleRouter')

router.use('/user',userRouter)
router.use('/constraints',constraintsRouter)
 



module.exports = router