import {Router} from 'express';
const userRouter=Router();
import { getSignUp,getAll,getSignIn,forgotPassword,otpVerify, changePassword,getUser } from '../Controllers/userControllers';
import verifyToken from '../middleware/verifyToken';

userRouter.get("/allUser",getAll);
userRouter.post("/getSignUp",getSignUp);
userRouter.post("/getSignIn",getSignIn);
userRouter.post("/forgotPassword",verifyToken,forgotPassword);
userRouter.post("/OtpVerify",verifyToken,otpVerify);
userRouter.post("/changePassword",verifyToken,changePassword)
userRouter.get('/getUser',verifyToken,getUser);
export default userRouter;