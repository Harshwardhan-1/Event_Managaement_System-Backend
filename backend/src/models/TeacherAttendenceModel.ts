import mongoose, { mongo } from "mongoose";
const TeacherSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    attendence:{
        type:String,
        required:true,
    },
});

export const TeacherAttendenceModel=mongoose.model('teacherAttendence',TeacherSchema);