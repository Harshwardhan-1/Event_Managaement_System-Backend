import { Router } from "express";
const AttendenceRoutes=Router();
import verifyToken from "../middleware/verifyToken";
import verifyStudent from "../middleware/VerifyStudent";
import { markAttendence,getAllAttendence,particularAttendence} from "../Controllers/AttendenceController";

AttendenceRoutes.get('/getAllAttendence',verifyToken,verifyStudent,getAllAttendence);
AttendenceRoutes.post('/markAttendence',verifyToken,verifyStudent,markAttendence);
AttendenceRoutes.post('/ParticularStudent',verifyToken,verifyStudent,particularAttendence);
export default AttendenceRoutes;