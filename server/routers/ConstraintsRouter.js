const Router = require('express')
const router = new Router()
const constraintsController = require('../controllers/ConstraintsController')

router.post('/',constraintsController.create)
router.get('/',constraintsController.getAll)
router.get('/:id',constraintsController.getOne)
router.put('/',constraintsController.updateOne)

module.exports = router