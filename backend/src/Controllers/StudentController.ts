import { studentModel } from '../models/StudentModel';
import {Request,Response} from 'express';
export const StudentCheck=async(req:Request,res:Response)=>{
    const {rollNo,branch,section,semester,phone}=req.body;
    if(!rollNo || !branch || !section || !semester || !phone){
        return res.status(401).json({
            message:"Enter detail properly",
        });
    }
    const user=(req as any).user; 
    const userId=user.userId;
    const SearchStudentId=await studentModel.findOne({userId});
    if(SearchStudentId){
        return res.status(401).json({
            message:"Profile already Exist",
        });
    }else{
        const create=await studentModel.create({
            userId,
            rollNo,
            branch,
            section,
            semester,
            phone,
        });
        return res.status(200).json({
            message:"Student data saved",
            data:create,
        });
    }
}








export const StudentProfile=async(req:Request,res:Response)=>{
    const user=(req as any).user;
    const userId=user.userId;
    const find=await studentModel.findOne({userId})
    .populate("userId","name gmail")
    if(!find){
        return res.status(404).json({
            message:"profile not exist",
        });
    }
    return res.status(200).json({
        message:"Account already exist",
        data:find
    })
}



export const particularStudent=async(req:Request,res:Response)=>{
const {department,section}=req.body;
if(!department || !section){
    return res.status(401).json({
        message:"provide department and section and gmail",
    });
}

const checkStudent=await studentModel.find({branch:department,section:section}).populate("userId","name gmail");
if(checkStudent.length===0){
    return res.status(401).json({
        message:"no student found",
    });
}
if(checkStudent){
    return res.status(200).json({
        message:"Got ALL Student",
        data:checkStudent,
    });
}
}