
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Array<{
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    rating?: number;
  }>;
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-purple hover:text-purple-700 font-semibold underline">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
