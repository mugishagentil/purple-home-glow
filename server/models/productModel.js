import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: String,
  category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Category',
  required: true
},

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  averageRating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },

}, {
  timestamps: true,
});

export default mongoose.model('Product', productSchema);
// This schema defines the structure of a product in the e-commerce application.
// It includes fields for the product's name, description, price, stock quantity, category,