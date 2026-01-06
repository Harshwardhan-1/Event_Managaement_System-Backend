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