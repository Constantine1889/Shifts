const db = require('../db ')

const User = db.model('User',new db.Schema({
    firstName:String,
    lastName:String,
    password:{type:String,required:true},
    role:{type:String,required:true,default:'EMPLOYEE'},
    email:{type:String,required:true},
    maxShifts:{type:Number,max:6},
    minShifts:{type:Number,default:5},
    job:{type:String},
    active:{type:Boolean,default:true},
    siteWorkAt:{
        type:db.Schema.Types.ObjectId,
        ref:'Site'
    }
}))

const Site = db.model('Site',new db.Schema({
    siteName:{type:String},
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
    siteID:{
        type:db.Schema.Types.ObjectId,
        ref:'Site'
    },
}))

const WorkDay = db.model('WorkDay',new db.Schema({
  date:{type:Date,required:true},
  shifts:[{
    type:db.Schema.Types.ObjectId,
        ref:'Shift'
  }],
  positionID: {
    type:db.Schema.Types.ObjectId,
    ref:'Position'
  }
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
    default:{type:Boolean,default:false},
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