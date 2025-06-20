import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import { protect, authorizeRoles, errorHandler } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:8080',  // Allow frontend dev server
  credentials: true
}));
app.use(express.json());

// ✅ Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

// ✅ Dashboards
app.get('/api/admin/dashboard', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` });
});

app.get('/api/seller/dashboard', protect, authorizeRoles('seller'), (req, res) => {
  res.json({ message: `Welcome Seller ${req.user.name}` });
});

app.get('/api/buyer/dashboard', protect, authorizeRoles('buyer'), (req, res) => {
  res.json({ message: `Welcome Buyer ${req.user.name}` });
});

// ✅ Error handler
app.use(errorHandler);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
