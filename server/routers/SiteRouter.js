const Router = require('express')
const router = new Router()
const siteController = require('../controllers/SiteController')

router.post('/',siteController.create)
router.get('/',siteController.getAll)


module.exports = router