import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1, min: 1 }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [cartItemSchema]
}, {
  timestamps: true
});

export default mongoose.model('Cart', cartSchema);
// This schema defines a cart for each user, allowing them to have multiple items in their cart.
// Each item in the cart references a product and has a quantity. The cart is linked to a user, ensuring that each user has a unique cart.
// The timestamps option automatically adds createdAt and updatedAt fields to the schema, which can be  useful for tracking when the cart was created or last modified.