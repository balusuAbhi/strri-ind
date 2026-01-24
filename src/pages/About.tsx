import { motion } from 'framer-motion';
import { Wheat, Cog, Sparkles, CheckCircle, Package } from 'lucide-react';

const processSteps = [
  {
    icon: Wheat,
    title: 'Paddy Cleaning',
    description: 'Raw paddy is thoroughly cleaned using advanced de-stoning and sieving equipment to remove impurities, ensuring only the finest grains proceed to the next stage.',
  },
  {
    icon: Cog,
    title: 'Hulling & Dehusking',
    description: 'State-of-the-art hulling machines carefully remove the outer husk while preserving the integrity of the grain, minimizing breakage and maintaining nutritional value.',
  },
  {
    icon: Sparkles,
    title: 'Color Sorting',
    description: 'High-precision optical sorters scan every grain, removing discolored or damaged pieces to ensure uniform appearance and premium quality in every batch.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Rigorous multi-point quality checks verify grain length, moisture content, aroma, and purity. Only rice meeting our exacting standards moves forward.',
  },
  {
    icon: Package,
    title: 'Hygienic Packaging',
    description: 'Final products are packaged in our ISO-certified facility using food-grade materials, sealed to lock in freshness and prepared for timely delivery worldwide.',
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-harvest-cream dark:bg-gray-900 transition-colors duration-300 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
            Our Story & Process
          </h1>
          <p className="text-xl text-harvest-brown/70 dark:text-gray-400 max-w-3xl mx-auto">
            25 years of dedication to excellence in rice milling, combining time-honored tradition with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl transition-colors duration-300">
            <h2 className="text-3xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-6">
              A Legacy of Quality
            </h2>
            <div className="space-y-4 text-lg text-harvest-brown/80 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 1990, Sri Tarakarama Rice Industries began as a modest family operation with a simple vision:
                to deliver the finest quality rice by honoring both the grain and the farmers who cultivate it.
                Today, we stand as one of the region's most trusted rice processors, supplying premium varieties
                to distributors, exporters, and retailers across multiple continents.
              </p>
              <p>
                Our success stems from an unwavering commitment to quality at every stage. We source paddy directly
                from certified farms, ensuring traceability and consistency. Our facility houses the latest in
                color-sorting, polishing, and grading technology, operated by skilled technicians who understand
                that every grain matters.
              </p>
              <p>
                Beyond business, we believe in sustainable partnerships. We work closely with farming communities,
                providing fair prices and technical support that helps them thrive. This approach has built lasting
                relationships and a supply chain we can depend on, season after season.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-serif font-bold text-harvest-primary dark:text-harvest-cream text-center mb-20"
          >
            Our Milling Process
          </motion.h2>

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-harvest-primary to-harvest-primary-light flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      {!isLast && (
                        <div className="hidden md:block absolute left-1/2 top-20 w-0.5 h-16 bg-gradient-to-b from-harvest-primary/50 to-transparent transform -translate-x-1/2" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-harvest-primary/10 dark:bg-harvest-primary/20 flex items-center justify-center">
                          <Icon className="text-harvest-primary dark:text-harvest-beige" size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
                            {step.title}
                          </h3>
                          <p className="text-lg text-harvest-brown/80 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow (Mobile) */}
                  {!isLast && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-harvest-primary/50 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-harvest-primary/10 dark:bg-harvest-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
            Quality You Can Trust
          </h3>
          <p className="text-lg text-harvest-brown/80 dark:text-gray-300 mb-6">
            Every batch of rice that leaves our facility carries our commitment to excellence.
            From field to table, we ensure quality, hygiene, and consistency in every grain.
          </p>
          <a
            href="/products"
            className="inline-block bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </a>
        </motion.div>
      </div>
    </div>
  );
}
