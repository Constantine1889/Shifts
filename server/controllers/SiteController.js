const ApiError = require('../error/ApiError')
const {Site} = require('../models/models')

class SiteController {

    async create(req,res) {
    console.log(req.body)
      const site = await Site.create(req.body)
       console.log(`Site ${site.siteName} created`)
    return res.json({message:`Site ${site.siteName} created`})
  
    }

    async getAll(req,res) {
        try {
            const sites = await Site.find({},'siteName')
            return res.json(sites)
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports = new SiteController()

