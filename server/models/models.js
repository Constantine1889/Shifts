const db = require('../db ')

const User = db.model('User',new db.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:'EMPLOYEE'},
    email:{type:String,required:true},
    maxShifts:{type:Number,max:6},
    minShifts:{type:Number,default:5},
    job:{type:String,required:true},
    active:{type:Boolean,default:true},
    siteWorkAt:{
        type:db.Schema.Types.ObjectId,
        ref:'Site'
    }
}))

const Site = db.model('Site',new db.Schema({
    siteName:{type:String,required:true},
    positions:[{
        type:db.Schema.Types.ObjectId,
        ref:'Position'
    }]
}))

const Position = db.model('Position',new db.Schema({
    positionName:{type:String,required:true},
    jobRequired:{type:String,required:true},
    workDays:[{
        type:db.Schema.Types.ObjectId,
        ref:'WorkDay'
    }],
}))

const WorkDay = db.model('WorkDay',new db.Schema({
  date:{type:Date,required:true},
  shifts:[{
    type:db.Schema.Types.ObjectId,
        ref:'Shift'
  }]
}
))

const Shift = db.model('Shift',new db.Schema({
    startTime:{type:Date,required:true},
    duration:{type:Number,required:true},
    employeeToWork:{
        type:db.Schema.Types.ObjectId,
        ref:'User'
    }
}))

const Constraints = db.model('Constraint',new db.Schema({
    employee:{
        type:db.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    Constraints:{type:Map,of:[Number]}
}))

const Schedule = db.model('Schedule',new db.Schema({
    site:{
        type:db.Schema.Types.ObjectId,
        ref:'Site',
        required:true,
    },
    startDate:{type:Date,required:true}
}))



module.exports = {
    User,
    Site,
    Position,
    WorkDay,
    Shift,
    Constraints,
    Schedule,
}