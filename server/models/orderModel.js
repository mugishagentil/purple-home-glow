import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentCode: {
  type: String,
  default: ''
},
isPaid: {
  type: Boolean,
  default: false
},
paidAt: {
  type: Date
},
isConfirmedByAdmin: {
  type: Boolean,
  default: false
},
confirmedAt: {
  type: Date
},

  paymentMethod: String,
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String
  },
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  isDelivered: { type: Boolean, default: false },
  deliveredAt: Date
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);
// This model defines the structure of an order in the e-commerce application.
// It includes details about the user, items ordered, shipping address, payment method, and status of the order.
// The `orderItemSchema` defines the structure of each item in the order, including the  