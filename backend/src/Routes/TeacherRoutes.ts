import {Router} from 'express';
const TeacherRoutes=Router();
import verifyToken from '../middleware/verifyToken';
import { checkTeacher,TeacherExist } from '../Controllers/TeacherController';

TeacherRoutes.get('/TeacherExist',verifyToken,TeacherExist);
TeacherRoutes.post('/checkTeacher',verifyToken,checkTeacher);

export default TeacherRoutes;