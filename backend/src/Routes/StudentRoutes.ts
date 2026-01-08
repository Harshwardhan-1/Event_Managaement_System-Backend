import {Router} from 'express';
const StudentRoutes=Router();
import verifyToken from '../middleware/verifyToken';
import verifyStudent from '../middleware/VerifyStudent';
import verifyTeacher from '../middleware/VerifyTeacher';
import { StudentCheck ,StudentProfile,particularStudent} from '../Controllers/StudentController';

StudentRoutes.post('/CheckStudent',verifyToken,verifyStudent,StudentCheck);
StudentRoutes.get("/checkProfileExist",verifyToken,verifyStudent,StudentProfile);
StudentRoutes.post('/getParticularStudent',verifyToken,verifyTeacher,particularStudent)

export default StudentRoutes;