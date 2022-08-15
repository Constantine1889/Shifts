class ConstraintsController {
    async create(req,res) {
        const {id} = req.params
       
        
    }

    async getOne(req,res) {

        //for test
        const {id} = req.params
        console.log(id)
        return res.json({id:`${id}`})
    }

    async getAll(req,res,next) {
        return res.json( {message:"Constraints",test:"test"} )
    }

    async updateOne(req,res) {}

}

module.exports = new ConstraintsController()