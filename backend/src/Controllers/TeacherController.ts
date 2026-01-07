import { TeacherModel } from "../models/TeacherModel";
import {Request,Response} from 'express';
export const checkTeacher=async(req:Request,res:Response)=>{
const {teacherId,subject,department,section}=req.body;
if(!teacherId || !subject || !department || !section){
    return res.status(401).json({
        message:"FIll details properly",
    });
}
const user=(req as any).user;
const userId=user.userId;
const findTeacher=await TeacherModel.findOne({teacherId,subject,department,section});
if(findTeacher){
    return res.status(401).json({
        message:"Teacher Already Exist for same course",
    });
}
const MakeTeacher=await TeacherModel.create({
    userId:userId,
    teacherId,
    subject,
    department,
    section,
});
return res.status(200).json({
    message:"Teacher Created Succeessfully",
    data:MakeTeacher,
});
}



export const TeacherExist=async(req:Request,res:Response)=>{
    const user=(req as any).user;
    const userId=user.userId;
const findTeacher=await TeacherModel.findOne({userId});
if(!findTeacher){
    return res.status(401).json({
        message:"Teacher Not found",
    });
}
return res.status(200).json({
    message:"TeacherExist",
    data:findTeacher,
});
}