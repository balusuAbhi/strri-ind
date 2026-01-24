import { motion } from 'framer-motion';

export function TrustedBy() {
  const clients = [
    { name: 'Premium Exports Ltd', logo: 'PE' },
    { name: 'Global Grain Traders', logo: 'GG' },
    { name: 'Harvest Distributors', logo: 'HD' },
    { name: 'Quality Foods Corp', logo: 'QF' },
    { name: 'Metro Wholesale', logo: 'MW' },
    { name: 'Royal Rice Group', logo: 'RR' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-harvest-brown dark:text-harvest-cream text-center mb-4">
            Trusted By
          </h2>
          <p className="text-center text-harvest-brown/70 dark:text-gray-400 mb-12 text-lg">
            Partnering with industry leaders across the supply chain
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-harvest-cream dark:bg-gray-700 hover:bg-harvest-beige/20 dark:hover:bg-gray-600 rounded-lg p-6 flex items-center justify-center h-32 transition-all duration-300 border-2 border-harvest-beige dark:border-gray-600 hover:border-harvest-gold group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-harvest-gold rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{client.logo}</span>
                    </div>
                    <p className="text-xs text-harvest-brown dark:text-gray-200 font-medium">{client.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
