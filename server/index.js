import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { protect, authorizeRoles } from './middleware/authMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Public auth routes
app.use('/api/auth', authRoutes);

// Example protected routes with role check

// Admin-only route
app.get('/api/admin/dashboard', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` });
});

// Seller-only route
app.get('/api/seller/dashboard', protect, authorizeRoles('seller'), (req, res) => {
  res.json({ message: `Welcome Seller ${req.user.name}` });
});

// Buyer-only route
app.get('/api/buyer/dashboard', protect, authorizeRoles('buyer'), (req, res) => {
  res.json({ message: `Welcome Buyer ${req.user.name}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
