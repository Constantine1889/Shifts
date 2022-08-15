const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')
const authMiddleware = require('../middlewares/AuthMiddleware')
const checkRole = require("../middlewares/checkRoleMiddleware")


router.post('/',checkRole("ADMIN"),userController.createEmployee)
router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleware,userController.check)
router.get('/employees',checkRole("ADMIN"),userController.getAll)
router.put('/employees/:id',userController.updateOne)

module.exports = router