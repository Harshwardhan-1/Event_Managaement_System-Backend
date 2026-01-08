import { Router } from "express";
const TeacherAttendence=Router();
import verifyToken from "../middleware/verifyToken";
import verifyTeacher from "../middleware/VerifyTeacher";

import { markPresent } from "../Controllers/TeacherAttendenceController";


TeacherAttendence.post('/markAttendence',verifyToken,verifyTeacher,markPresent);


export default TeacherAttendence;