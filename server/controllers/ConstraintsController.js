const ApiError = require('../error/ApiError')
class ConstraintsController {
    async create(req,res) {}

    async getOne(req,res) {
        const {id} = req.params
        return res.json({id:`${id}`})
    }

    async getAll(req,res,next) {
        return res.json( {message:"Constraints",test:"test"} )
    }

    async updateOne(req,res) {}

}

module.exports = new ConstraintsController()