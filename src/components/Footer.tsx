import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-harvest-primary dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Taraka Group"
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-serif font-bold text-white">Taraka Group</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Premium quality rice processing with 25 years of excellence and trust.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-harvest-beige">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-harvest-beige transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-harvest-beige transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/90 hover:text-harvest-beige transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-harvest-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-harvest-beige">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-harvest-beige" />
                <span className="text-white/90 text-sm">
                  24-25, Araliganur Cross,Adoni Road,Siruguppa,Bellary Dist, Karnataka-583121
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0 text-harvest-beige" />
                <span className="text-white/90 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-harvest-beige" />
                <span className="text-white/90 text-sm">sritrri@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-harvest-beige">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-harvest-beige hover:text-harvest-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-harvest-beige hover:text-harvest-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-harvest-beige hover:text-harvest-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Taraka Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
