import express from 'express';
import { registerUser, authUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

export default router;
// This file defines the authentication routes for user registration and login.
// It uses the Express router to handle POST requests to the `/register` and `/login` endpoints.