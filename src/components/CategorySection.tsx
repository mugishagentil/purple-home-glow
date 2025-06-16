
const CategorySection = () => {
  const categories = [
    {
      title: "Cosmetics and Beauty Products",
      color: "bg-pink-100",
      textColor: "text-pink-800",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&h=200&fit=crop"
    },
    {
      title: "Clothes",
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=300&h=200&fit=crop"
    },
    {
      title: "Men & Women",
      color: "bg-purple-100",
      textColor: "text-purple-800",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=300&h=200&fit=crop"
    },
    {
      title: "Household Products",
      color: "bg-blue-100",
      textColor: "text-blue-800",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&h=200&fit=crop"
    },
    {
      title: "Shoes",
      color: "bg-green-100",
      textColor: "text-green-800",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          BROWSE BY CATEGORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`${category.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`font-bold text-lg ${category.textColor} mb-2`}>
                    {category.title}
                  </h3>
                  <button className={`${category.textColor} opacity-80 hover:opacity-100 text-sm underline`}>
                    Shop Now →
                  </button>
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
