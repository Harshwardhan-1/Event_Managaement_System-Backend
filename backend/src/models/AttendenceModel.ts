import mongoose from 'mongoose';
const AttendenceSchema=new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
},
attendence:{
    type:String,
    required:true,
},
date:{
    type:String,
    required:true,
},
subject:{
    type:String,
    required:true,
},
teacher:{
    type:String,
    required:true,
},
})
export const AttendenceModel=mongoose.model("attendence",AttendenceSchema);