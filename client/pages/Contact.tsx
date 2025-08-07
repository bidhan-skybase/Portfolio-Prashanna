import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const socialIcons = [
    {
      src: "/Linkedin.svg",
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/prashannabajracharya/",
    },
    {
      src: "/Instagram.svg",
      alt: "Instagram",
      href: "https://www.instagram.com/prashannabajracharya/",
    },
    {
      src: "/Behance.svg",
      alt: "Behance",
      href: "https://www.behance.net/prashanbajrach",
    },
    {
      src: "/Facebook.svg",
      alt: "Facebook",
      href: "https://www.facebook.com/prashanna07/",
    },
    {
      src: "/Youtube.svg",
      alt: "YouTube",
      href: "https://www.youtube.com/@untitledNepal",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_40mgr19',     // Replace with your EmailJS service ID
        'template_ojama59',    // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'fQ9QyvQ2tOXqP0oi2'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              className="text-white font-medium text-4xl lg:text-5xl mb-8"
              style={{
                fontFamily: "Staatliches",
                fontSize: "clamp(32px, 6vw, 48px)",
                lineHeight: 1.1,
              }}
            >
              Let's Build Something That
              <br />
              looks Like No One Else
            </h2>

            {/* Images */}
            <div className="flex gap-4 mt-10">
              <img
                src="https://res.cloudinary.com/dzign6pg0/image/upload/v1752218517/IMG_1646_Medium_x0mwhj.jpg"
                alt="Studio setup 1"
                className="w-52 h-36 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://res.cloudinary.com/dzign6pg0/image/upload/v1752218517/Master_01_Medium_d02vg3.jpg"
                alt="Studio setup 2"
                className="w-52 h-36 object-cover rounded-lg shadow-md"
              />
            </div>

            <div>
              <h3
                className="text-white text-xs mb-2"
                style={{ fontFamily: "Helvetica", fontSize: "12px" }}
              >
                CONNECT WITH ME:
              </h3>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <motion.a
                    key={icon.alt}
                    href={icon.href}
                    className="block"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-10 h-10" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-white text-xs mb-2"
                style={{ fontFamily: "Helvetica", fontSize: "12px" }}
              >
                FOR BUSINESS ENQUIRY:
              </h3>
              <a
                href="mailto:Prashanna2022@gmail.com"
                className="text-portfolio-accent-gold text-2xl lg:text-3xl hover:underline"
                style={{ fontFamily: "Helvetica" }}
              >
                Prashanna2022@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  Failed to send message. Please try again or email directly.
                </div>
              )}

              <div className="grid grid-cols-1 ">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily:"Staatliches"}}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-dark-green focus:border-transparent outline-none transition-all duration-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>

              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily:"Staatliches"}}>
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-dark-green focus:border-transparent outline-none transition-all duration-200"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily:"Staatliches"}}>
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-dark-green focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-portfolio-dark-green text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                style={{fontFamily:"Staatliches"}}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
