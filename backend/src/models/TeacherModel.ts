import mongoose from 'mongoose';
const TeacherSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    teacherId:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    }
});


export const TeacherModel=mongoose.model("teacher",TeacherSchema);