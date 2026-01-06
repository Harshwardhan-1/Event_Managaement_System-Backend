import mongoose from "mongoose";
const studentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    rollNo:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    semester:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
})

export const studentModel=mongoose.model("student",studentSchema);