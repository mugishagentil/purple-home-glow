
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing quality products and fast delivery. I love supporting local women entrepreneurs!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&fit=crop"
    },
    {
      name: "Grace K.",
      rating: 5,
      text: "The cosmetics I bought are incredible. Great prices and authentic products from talented women.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop"
    },
    {
      name: "Marie D.",
      rating: 5,
      text: "This marketplace changed my shopping experience. So many unique items and great customer service!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
