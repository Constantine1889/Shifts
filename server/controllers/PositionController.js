const {Site,Position,WorkDay} = require('../models/models')

class PositionController {
    async create(req,res) {
        const position = await Position.create(req.body)
        await Site.findByIdAndUpdate(position.siteID,{
            $push:{positions:position._id}
        })
      
        console.log(`Position ${position.positionName } created`)
        return res.json({message:`Position ${ position.positionName} created`})
        }

    async getAllbySite(req,res) {
            const {siteID} = req.params
            const positions = await Position.find({"siteID":siteID})
            console.log(positions)
            return res.json(positions)
        }
    
    async deleteOne(req,res) {
        try {
            const {positionID} = req.params
            const position = await Position.findByIdAndDelete(positionID)
            await Site.findByIdAndUpdate(position.siteID,{
                $pull:{positions:position._id}
            })
            console.log(`Position ${position.positionName} deleted`)
            return res.json({message:`Position ${position.positionName} deleted`})
        } catch (error) {
            console.log(error)
        }
     
    }
    }

   


module.exports = new PositionController()