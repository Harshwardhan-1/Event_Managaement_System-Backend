import {Router} from 'express';
const userRouter=Router();
import { getSignUp,getAll,getSignIn,forgotPassword,otpVerify, changePassword,getUser,UpdateProfile,MakeAdmin,DeleteAnyone } from '../Controllers/userControllers';
import verifyToken from '../middleware/verifyToken';
import verifyAdmin from '../middleware/VerifyAdmin';

userRouter.get("/allUser",getAll);
userRouter.post("/getSignUp",getSignUp);
userRouter.post("/getSignIn",getSignIn);
userRouter.post("/forgotPassword",verifyToken,forgotPassword);
userRouter.post("/OtpVerify",verifyToken,otpVerify);
userRouter.post("/changePassword",verifyToken,changePassword)
userRouter.get('/getUser',verifyToken,getUser);
userRouter.post('/handleUpdate',verifyToken,verifyAdmin,UpdateProfile);
userRouter.post('/MakeAdmin',verifyToken,verifyAdmin,MakeAdmin);
userRouter.post('/DeleteAnyone',verifyToken,verifyAdmin,DeleteAnyone);
export default userRouter;