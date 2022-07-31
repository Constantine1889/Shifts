const Router = require('express')
const router = new Router()
const constraintsController = require('../controllers/ConstraintsController')

router.post('/:id',constraintsController.create)
router.get('/',constraintsController.getAll)
router.get('/:id',constraintsController.getOne)
router.put('/:id',constraintsController.updateOne)

module.exports = router