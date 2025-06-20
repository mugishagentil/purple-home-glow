
import { useState } from 'react';
import { Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductReviews from '@/components/ProductReviews';
import RelatedProducts from '@/components/RelatedProducts';

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const productImages = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&h=400&fit=crop"
  ];

  const colors = [
    { name: 'black', color: '#000000' },
    { name: 'gray', color: '#6B7280' },
    { name: 'navy', color: '#1E3A8A' }
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home / Shop / Men / T-Shirts
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-purple' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Men T-Shirts</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(4.5)</span>
              </div>
              <p className="text-3xl font-bold text-purple mb-6">5000 Rwf</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name ? 'border-purple' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-purple bg-purple text-white'
                        : 'border-gray-300 text-gray-700 hover:border-purple'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button className="flex-1 bg-purple hover:bg-purple-600 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'details'
                  ? 'border-purple text-purple'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'reviews'
                  ? 'border-purple text-purple'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Rating & Reviews
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-2 border-b-2 font-medium ${
                activeTab === 'faq'
                  ? 'border-purple text-purple'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'details' && (
            <div className="prose max-w-none">
              <p className="text-gray-600">
                This premium men's t-shirt is crafted from 100% cotton for ultimate comfort and durability. 
                Perfect for casual wear or layering, it features a classic fit that looks great on everyone.
              </p>
            </div>
          )}
          {activeTab === 'reviews' && <ProductReviews />}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">What is the material?</h4>
                <p className="text-gray-600">100% Premium Cotton</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">How should I care for this item?</h4>
                <p className="text-gray-600">Machine wash cold, tumble dry low</p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <RelatedProducts />
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
