import {Router} from 'express';
const TeacherRoutes=Router();
import verifyToken from '../middleware/verifyToken';
import verifyTeacher from '../middleware/VerifyTeacher';
import { checkTeacher,TeacherExist } from '../Controllers/TeacherController';

TeacherRoutes.get('/TeacherExist',verifyToken,verifyTeacher,TeacherExist);
TeacherRoutes.post('/checkTeacher',verifyToken,verifyTeacher,checkTeacher);

export default TeacherRoutes;