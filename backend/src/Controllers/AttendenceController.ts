import { AttendenceModel } from "../models/AttendenceModel";
import {Request,Response} from 'express';

export const getAllAttendence=async(req:Request,res:Response)=>{
const allAttendence=await AttendenceModel.find();
return res.status(200).json({
    allAttendence
});
}

export const markAttendence=async(req:Request,res:Response)=>{
const {attendence,subject,teacher}=req.body;
if(!attendence || !subject || !teacher){
    return res.status(401).json({
        message:"fill details properly",
    });
}
const user=(req as any).user;
const userId=user.userId;
const today=new Date();
today.setHours(0,0,0,0);
const todayStr=today.toISOString();
const alreadyMarked=await AttendenceModel.findOne({userId,date:todayStr,subject});
if(alreadyMarked){
    return res.status(401).json({
        message:"Attendence already marked for today",
    });
}
const AddDetail=await AttendenceModel.create({
    userId,
    attendence,
    subject,
    teacher,
     date:todayStr,
});
return res.status(200).json({
    message:"user attendence mark successfully",
    data:AddDetail,
});
}




export const particularAttendence=async(req:Request,res:Response)=>{
    const {subjectName,subjectTeacher}=req.body;
    if(!subjectName || !subjectTeacher){
        return res.status(401).json({
            message:"Fill Details Properly",
        });
    }
const user=(req as any).user;
const userId=user.userId;
const attendenceRecord=await AttendenceModel.find({userId,subjectName,subjectTeacher}).sort({date:1});
    if(attendenceRecord.length===0){
        return res.status(404).json({
            message:"No attendence record found for this account"
        });
    }
    return res.status(200).json({
        message:"User Attendence",
        data:attendenceRecord
    });
}