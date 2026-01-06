import { Router } from "express";
const AttendenceRoutes=Router();
import verifyToken from "../middleware/verifyToken";
import verifyStudent from "../middleware/VerifyStudent";
import { markAttendence,getAllAttendence} from "../Controllers/AttendenceController";

AttendenceRoutes.get('/getAllAttendence',verifyToken,verifyStudent,getAllAttendence);
AttendenceRoutes.post('/markAttendence',verifyToken,verifyStudent,markAttendence);
export default AttendenceRoutes;