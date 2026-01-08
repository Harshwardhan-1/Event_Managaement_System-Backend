import { TeacherAttendenceModel } from "../models/TeacherAttendenceModel";
import {Request,Response} from 'express';
export const markPresent=async(req:Request,res:Response)=>{
    const {name,gmail,section}=req.body;
    if(!name || !gmail || !section){
        return res.status(401).json({
            message:"provide detail properly",
        });
    }
    const user=(req as any).user;
    const userId=user.userId;
    const today=new Date();
    today.setHours(0,0,0,0);
    const todayStr=today.toISOString();
    const checkMark=await TeacherAttendenceModel.findOne({userId,gmail,date:todayStr,section});
    if(checkMark){
        return res.status(401).json({
            message:"student attendence mark already for today subject",
        });
    }
    const MarkAttendence=await TeacherAttendenceModel.create({
        userId:userId,
        name,
        gmail,
        date:todayStr,
        section,
        attendence:"present",
    });
    return res.status(200).json({
        message:"student attendence successfully marked present",
        data:MarkAttendence,
    });
}



export const markAbsent=async(req:Request,res:Response)=>{
const {name,gmail,section}=req.body;
if(!name || !gmail || !section){
    return res.status(401).json({
        message:"provide full detail",
    });
}
const user=(req as any).user;
const userId=user.userId;
const today=new Date();
today.setHours(0,0,0,0);
const todayStr=today.toISOString();
const find=await TeacherAttendenceModel.findOne({userId,gmail,date:todayStr,section});
if(find){
   return res.status(401).json({
        message:"user attendence already has been marked",
    });
}
const markAttendence=await TeacherAttendenceModel.create({
    userId:userId,
    name,
    gmail,
    date:todayStr,
    section,
    attendence:"Absent",
});
return res.status(200).json({
    message:"attendence mark successfully",
    data:markAttendence,
});
}







export const getAttendence=async(req:Request,res:Response)=>{
    const {name,gmail}=req.body;
    if(!name || !gmail){
        return res.status(401).json({
            message:"provide detail",
        });
    }
    const findStudent=await TeacherAttendenceModel.find({gmail});
    if(!findStudent){
        return res.status(401).json({
            message:"not find student"
        });
    }
    if(findStudent.length===0){
        return res.status(401).json({
            message:"no record",
        });
    }
    return res.status(200).json({
        message:"getStudentAttendence",
        data:findStudent,
    });
}