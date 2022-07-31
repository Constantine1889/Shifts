const jwt = require('jsonwebtoken')

module.exports = function(role) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.Authorization.split(' ')[1] //[0] token's type (Bearer in our case)
        if(!token){
            return res.status(401).json({message:"Not Authorized"})
        }

        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        if(decoded)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message:"Not Authorized"})
    }
}