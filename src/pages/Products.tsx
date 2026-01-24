import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  sizes: string[];
  image: string;
  grainImage: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Extra Long 1121 Basmati',
    category: 'Premium Basmati',
    description: 'Aged for 2 years, extra-long grains with exceptional aroma. Perfect for biryanis and pilafs.',
    sizes: ['5kg', '10kg', '25kg', '50kg'],
    image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'Traditional Basmati',
    category: 'Premium Basmati',
    description: 'Classic basmati rice with authentic fragrance and taste. Ideal for everyday cooking.',
    sizes: ['5kg', '10kg', '25kg'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/7456395/pexels-photo-7456395.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'White Sella Basmati',
    category: 'Sella Rice',
    description: 'Parboiled premium basmati that retains nutrients and stays separated when cooked.',
    sizes: ['10kg', '25kg', '50kg'],
    image: 'https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'Golden Sella Basmati',
    category: 'Sella Rice',
    description: 'Golden parboiled basmati with enhanced texture and extended shelf life.',
    sizes: ['10kg', '25kg', '50kg'],
    image: 'https://images.pexels.com/photos/5794843/pexels-photo-5794843.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/7456388/pexels-photo-7456388.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    name: 'Premium Non-Basmati',
    category: 'Non-Basmati',
    description: 'High-quality non-basmati rice perfect for bulk orders and institutional use.',
    sizes: ['25kg', '50kg'],
    image: 'https://images.pexels.com/photos/5794883/pexels-photo-5794883.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    name: 'Organic Brown Rice',
    category: 'Specialty',
    description: 'Nutrient-rich organic brown rice with natural bran layer intact.',
    sizes: ['5kg', '10kg', '25kg'],
    image: 'https://images.pexels.com/photos/4033322/pexels-photo-4033322.jpeg?auto=compress&cs=tinysrgb&w=800',
    grainImage: 'https://images.pexels.com/photos/4033323/pexels-photo-4033323.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const categories = ['All', 'Premium Basmati', 'Sella Rice', 'Non-Basmati', 'Specialty'];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-harvest-cream dark:bg-gray-900 transition-colors duration-300 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
            Our Premium Products
          </h1>
          <p className="text-xl text-harvest-brown/70 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our range of premium quality rice varieties, carefully processed to meet international standards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-harvest-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-harvest-brown dark:text-gray-200 hover:bg-harvest-beige/30 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-harvest-beige text-harvest-primary px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={product.grainImage}
                    alt={`${product.name} grains`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-harvest-primary"
                  />
                  <h3 className="text-2xl font-serif font-bold text-harvest-primary dark:text-harvest-cream">
                    {product.name}
                  </h3>
                </div>

                <p className="text-harvest-brown/80 dark:text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-harvest-brown/70 dark:text-gray-400 mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-harvest-cream dark:bg-gray-700 text-harvest-brown dark:text-gray-200 rounded-full text-sm border border-harvest-beige dark:border-gray-600"
                      >
                        <Package className="inline w-3 h-3 mr-1" />
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  state={{ product: product.name }}
                  className="block w-full bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 text-center group shadow-md hover:shadow-lg"
                >
                  Inquire Now
                  <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
