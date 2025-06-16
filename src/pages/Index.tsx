
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import CategorySection from '@/components/CategorySection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  const newArrivals = [
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=300&fit=crop",
      title: "Wireless Headphones",
      price: "15,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&h=300&fit=crop",
      title: "Running Shoes",
      price: "25,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231e?q=80&w=300&h=300&fit=crop",
      title: "Handmade Jewelry",
      price: "8,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&h=300&fit=crop",
      title: "Casual Sneakers",
      price: "20,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=300&h=300&fit=crop",
      title: "Smart Watch",
      price: "45,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=300&h=300&fit=crop",
      title: "Leather Bag",
      price: "30,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=300&h=300&fit=crop",
      title: "Sunglasses",
      price: "12,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&h=300&fit=crop",
      title: "Coffee Mug",
      price: "5,000 Rwf",
      rating: 5
    }
  ];

  const topSelling = [
    {
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=300&h=300&fit=crop",
      title: "Designer Jacket",
      price: "35,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&h=300&fit=crop",
      title: "Cotton T-Shirt",
      price: "12,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=300&h=300&fit=crop",
      title: "Denim Jeans",
      price: "18,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=300&h=300&fit=crop",
      title: "Summer Dress",
      price: "22,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=300&h=300&fit=crop",
      title: "Fashion Boots",
      price: "28,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=300&h=300&fit=crop",
      title: "Winter Coat",
      price: "50,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=300&h=300&fit=crop",
      title: "Polo Shirt",
      price: "15,000 Rwf",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=300&h=300&fit=crop",
      title: "Sport Shorts",
      price: "10,000 Rwf",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      <ProductSection title="TOP SELLING" products={topSelling} />
      <CategorySection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
