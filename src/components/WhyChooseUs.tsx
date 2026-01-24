import { Settings, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const features = [
    {
      icon: Settings,
      title: 'Advanced Technology',
      description:
        'State-of-the-art milling equipment and processing technology ensure consistent quality and minimal grain breakage, preserving the natural goodness of every grain.',
    },
    {
      icon: Shield,
      title: 'Hygienic Processing',
      description:
        'Our ISO-certified facility maintains the highest standards of cleanliness and food safety, with rigorous quality checks at every stage of processing.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description:
        'Reliable logistics and efficient inventory management guarantee on-time delivery, keeping your supply chain running smoothly without interruption.',
    },
  ];

  return (
    <section className="py-20 bg-harvest-cream dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-harvest-primary dark:text-harvest-cream text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-harvest-brown/70 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            25 years of excellence, innovation, and unwavering commitment to quality
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-harvest-primary/10 dark:bg-harvest-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-harvest-primary dark:text-harvest-beige" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-harvest-brown/80 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
