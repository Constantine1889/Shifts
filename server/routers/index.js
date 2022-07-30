const Router = require('express')
const router = new Router()
//Routers
const userRouter = require('./UserRouter')
const constraintsRouter = require('./ConstraintsRouter')
const dayRouter = require('./WorkDayRouter')
const positionRouter = require('./PositionRouter')
const shiftRouter = require('./ShiftRouter')
const siteRouter = require('./SiteRouter')
const scheduleRouter = require('./ScheduleRouter')

// router.use('/user'.userRouter)
router.use('/constraints',constraintsRouter)
// router.use('/day'.dayRouter)
// router.use('/position'.positionRouter)
// router.use('/shift'.shiftRouter)
// router.use('/site'.siteRouter)
// router.use('/schedule'.scheduleRouter)



module.exports = router