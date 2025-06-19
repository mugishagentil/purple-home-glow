import express from 'express';
import { registerUser, authUser, logoutUser } from '../controllers/authController.js';

const authRouter = express.Router();
authRouter.post('/register', registerUser);
authRouter.post('/login', authUser);
authRouter.post('/logout', logoutUser);
export default authRouter;