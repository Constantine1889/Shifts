const ApiError = require('../error/ApiError')
const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id,email,role) => {
    return jwt.sign(
        {id:id,email:email,role:role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'})
}

class UserController {

    async registration(req,res,next) {
        const {email,password,role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({'email':email})
        if(candidate) {
           return next(ApiError.badRequest('User already exists'))
        }

        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,role,password:hashPassword})
        const token = generateJWT(user.id,email,role)

        return res.json({token})
    }

    async login(req,res,next) {
        const {email,password} = req.body
        const user = await User.findOne({'email':email})
        if(!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return next(ApiError.internal('Invalid Password'))
        }
        const token = generateJWT(user.id,user.email,user.role)
        return res.json({token})
    }

    async check(req,res) {
        const {id ,email,role} = req.user
        const token = generateJWT(id,email,role)
        return res.json({token})
    }

    async createEmployee(req,res) {
        return await User.create(req.body).then((docUser)=>{
            console.log('User created')
            return res.json(docUser)
        })
    }

    async getAll(req,res) {
        const docs = await User.find({active:true})
        return res.json(docs)
    }

    async updateOne(req,res) {
        const {id} = req.params
        await User.findByIdAndUpdate(id,req.body) 
    }
}

module.exports = new UserController()