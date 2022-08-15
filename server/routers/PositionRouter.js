const Router = require('express')
const router = new Router()
const positionController = require('../controllers/PositionController')

router.post('/',positionController.create)
router.get('/:siteID', positionController.getAllbySite)
router.delete('/:positionID',positionController.deleteOne)


module.exports = router