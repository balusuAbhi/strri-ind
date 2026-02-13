import { motion } from 'framer-motion';

export function Introduction() {
  return (
    <section className="py-20 bg-harvest-cream dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-harvest-primary dark:text-harvest-cream text-center mb-8">
            Welcome to Taraka Group
          </h2>

          <div className="space-y-6 text-lg text-harvest-brown dark:text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              For over 25 years, Taraka Group has been at the forefront of rice processing excellence,
              combining traditional wisdom with cutting-edge technology to deliver the finest quality rice to
              markets across the region. Our state-of-the-art facility processes thousands of tons of premium
              paddy annually, ensuring every grain meets our exacting standards for purity, taste, and nutritional value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From the golden fields of trusted farmers to your table, we maintain complete control over every
              step of the journey. Our commitment extends beyond business – it's about preserving the heritage
              of quality rice production while embracing innovation that benefits our partners, customers, and
              the communities we serve. When you choose Taraka Group, you choose a legacy of trust, quality,
              and excellence that spans generations.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
