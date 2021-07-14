const mongoos =require("mongoose")

const user = new mongoos.Schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String},
    roll:{type:Number}
    rating:{type:Number}
})

const grade = new mongoos.Schema({
    userName:{type:String},
    math:{type:Number},
    science:{type:Number},
    music:{type:Number},
    computer:{type:Number},
    geology:{type:Number},
    history:{type:Number},
    total:{type:Number},
    average:{type:Number},
})