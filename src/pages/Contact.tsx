import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { submitContactInquiry, ContactInquiry } from "../lib/supabase";

export function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const preSelectedProduct = location.state?.product || "";
  const submissionInProgress = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    confirmPhone: "",
    rice_variety: preSelectedProduct,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [phoneMatchError, setPhoneMatchError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (submissionInProgress.current || isSubmitting) {
      console.log("Submission already in progress, skipping...");
      return;
    }

    // Validate phone numbers match
    if (formData.phone !== formData.confirmPhone) {
      setPhoneMatchError(true);
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setError("");

    try {
      // Save to Google Sheets (remove confirmPhone from submission)
      const { confirmPhone, ...dataToSubmit } = formData;
      await submitContactInquiry(dataToSubmit as ContactInquiry);

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        confirmPhone: "",
        rice_variety: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to submit inquiry. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      submissionInProgress.current = false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear phone match error when user types in either phone field
    if ((name === "phone" || name === "confirmPhone") && phoneMatchError) {
      setPhoneMatchError(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-harvest-cream dark:bg-gray-900 transition-colors duration-300 pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-2xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle
                className="text-green-600 dark:text-green-400"
                size={48}
              />
            </motion.div>

            <h2 className="text-4xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-harvest-brown/70 dark:text-gray-400 mb-8">
              Your inquiry has been received. Our team will get back to you
              within 24 hours.
            </p>

            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Home size={20} />
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

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
            Get In Touch
          </h1>
          <p className="text-xl text-harvest-brown/70 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to partner with us? Send us your inquiry and we'll get back to
            you promptly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8 transition-colors duration-300">
              <h2 className="text-3xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-harvest-primary/20 dark:bg-harvest-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="text-harvest-primary dark:text-harvest-beige"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-harvest-brown dark:text-harvest-cream mb-1">
                      Address
                    </h3>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      24-25, Araliganur Cross, Adoni Road, Siruguppa, Bellary
                      Dist, Karnataka-583121
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-harvest-primary/20 dark:bg-harvest-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone
                      className="text-harvest-primary dark:text-harvest-beige"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-harvest-brown dark:text-harvest-cream mb-1">
                      Phone
                    </h3>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      +91 98765 43210
                    </p>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-harvest-primary/20 dark:bg-harvest-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail
                      className="text-harvest-primary dark:text-harvest-beige"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-harvest-brown dark:text-harvest-cream mb-1">
                      Email
                    </h3>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      info@sritarakarama.com
                    </p>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      sales@sritarakarama.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-harvest-primary/20 dark:bg-harvest-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock
                      className="text-harvest-primary dark:text-harvest-beige"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-harvest-brown dark:text-harvest-cream mb-1">
                      Business Hours
                    </h3>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-harvest-brown/70 dark:text-gray-400">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-harvest-beige/30 rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.327768998767!2d76.92463627378642!3d15.627524951113964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7bb83846e0c13%3A0x12961aceba710130!2sSir%20Taraka%20Rama%20Rice%20Industries!5e0!3m2!1sen!2sin!4v1769175774108!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Sri Tarakarama Rice Industries Location"
              />
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300"
            >
              <h2 className="text-3xl font-serif font-bold text-harvest-primary dark:text-harvest-cream mb-6">
                Send Us a Message
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-harvest-beige dark:border-gray-600 bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 focus:border-harvest-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-harvest-beige dark:border-gray-600 bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 focus:border-harvest-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-harvest-beige dark:border-gray-600 bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 focus:border-harvest-primary outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPhone"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Confirm Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="confirmPhone"
                    name="confirmPhone"
                    required
                    value={formData.confirmPhone}
                    onChange={handleChange}
                    onBlur={() => {
                      if (
                        formData.phone &&
                        formData.confirmPhone &&
                        formData.phone !== formData.confirmPhone
                      ) {
                        setPhoneMatchError(true);
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      phoneMatchError
                        ? "border-red-500 focus:border-red-500"
                        : "border-harvest-beige dark:border-gray-600 focus:border-harvest-primary"
                    } bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 outline-none transition-colors`}
                    placeholder="+91 98765 43210"
                  />
                  {phoneMatchError && (
                    <p className="text-red-600 text-sm mt-2">
                      Phone numbers do not match. Please check and try again.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="rice_variety"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Rice Variety Interest
                  </label>
                  <select
                    id="rice_variety"
                    name="rice_variety"
                    value={formData.rice_variety}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-harvest-beige dark:border-gray-600 bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 focus:border-harvest-primary outline-none transition-colors"
                  >
                    <option value="">Select a variety</option>
                    <option value="Extra Long 1121 Basmati">
                      Extra Long 1121 Basmati
                    </option>
                    <option value="Traditional Basmati">
                      Traditional Basmati
                    </option>
                    <option value="White Sella Basmati">
                      White Sella Basmati
                    </option>
                    <option value="Golden Sella Basmati">
                      Golden Sella Basmati
                    </option>
                    <option value="Premium Non-Basmati">
                      Premium Non-Basmati
                    </option>
                    <option value="Organic Brown Rice">
                      Organic Brown Rice
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-harvest-brown dark:text-gray-300 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-harvest-beige dark:border-gray-600 bg-white dark:bg-gray-700 text-harvest-brown dark:text-gray-200 focus:border-harvest-primary outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
