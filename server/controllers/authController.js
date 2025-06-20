import asyncHandler from 'express-async-handler';
import prisma from '../prismaClient.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import { notify } from '../utils/notify.js';  // import notify utility

// Register User
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role.toUpperCase(), // Prisma enum: ADMIN, BUYER, SELLER
    }
  });

  // Notify admins about new user registration
  try {
    await notify({
      userId: null,  // No specific user, this is for admins
      message: `New user registered: ${user.name} (${user.role})`,
      recipientRole: 'ADMIN',
      relatedOrderId: null,
    });
  } catch (error) {
    console.error('Notification error:', error);
  }

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// Login User
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Logout User (if using cookie tokens)
export const logoutUser = (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: 'Logged out successfully' });
};
