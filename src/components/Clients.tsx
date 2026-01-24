import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    company: 'Premium Exports Ltd',
    role: 'Procurement Director',
    content: 'Sri Tarakarama Rice Industries has been our trusted partner for over 5 years. Their consistent quality and timely delivery have helped us maintain our reputation in international markets.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Priya Sharma',
    company: 'Quality Foods Corp',
    role: 'Supply Chain Manager',
    content: 'The Extra Long 1121 Basmati from Sri Tarakarama Rice Industries is exceptional. Our customers consistently praise the aroma and grain length. Highly recommended for premium quality.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Mohammed Ali',
    company: 'Global Grain Traders',
    role: 'Managing Director',
    content: 'Their state-of-the-art processing and hygienic standards are unmatched. We have complete confidence in every shipment. A true partner in our growth journey.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Clients() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-harvest-cream/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-harvest-brown mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-harvest-brown/70 max-w-2xl mx-auto">
            Trusted by industry leaders who value quality, consistency, and reliability
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          <div className="flex gap-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 shadow-lg flex-shrink-0 w-[85vw] snap-center relative"
              >
                <div className="absolute top-6 right-6 text-harvest-gold/20">
                  <Quote size={48} />
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-harvest-gold"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-harvest-brown">{testimonial.name}</h3>
                    <p className="text-sm text-harvest-brown/70">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-harvest-gold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-harvest-gold fill-harvest-gold"
                    />
                  ))}
                </div>

                <p className="text-harvest-brown/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators (Mobile) */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-harvest-gold/30"
            />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-harvest-gold/20">
                <Quote size={48} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-harvest-gold"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-harvest-brown">{testimonial.name}</h3>
                  <p className="text-sm text-harvest-brown/70">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-harvest-gold">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-harvest-gold fill-harvest-gold"
                  />
                ))}
              </div>

              <p className="text-harvest-brown/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-harvest-gold/10 rounded-3xl px-6 py-6 sm:px-8 sm:py-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-harvest-brown">500+</p>
              <p className="text-sm text-harvest-brown/70">Happy Clients</p>
            </div>
            <div className="h-px w-16 sm:w-px sm:h-12 bg-harvest-gold/30" />
            <div className="text-center">
              <p className="text-3xl font-bold text-harvest-brown">50K+</p>
              <p className="text-sm text-harvest-brown/70">Tons Processed</p>
            </div>
            <div className="h-px w-16 sm:w-px sm:h-12 bg-harvest-gold/30" />
            <div className="text-center">
              <p className="text-3xl font-bold text-harvest-brown">30+</p>
              <p className="text-sm text-harvest-brown/70">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
