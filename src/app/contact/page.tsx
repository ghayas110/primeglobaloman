import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Prime Global Oman',
  description: 'Get in touch with Prime Global Oman team today.',
};

export default function Contact() {
  return (
    <div className="w-full">
      {/* Breadcrumb Hero */}
      <section className="relative w-full h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.png" 
            alt="Contact Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-navy/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white uppercase tracking-wider mb-4">
            Contact
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white font-medium">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-primary">Contact</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-8">Contact Information</h2>
              
              <p className="text-brand-subtext mb-10 leading-relaxed">
                We are always ready to assist you with your logistics needs. Feel free to reach out to us using the contact details below or fill out the form, and our team will get back to you promptly.
              </p>

              <div className="space-y-8">
                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-gray rounded-full flex justify-center items-center text-brand-primary mr-6 shrink-0 shadow-sm">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Head Office</h4>
                      <p className="text-brand-subtext">319 C16 Ly Thuong Kiet, Phuong 15, Quan 11, Tp.HCM</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-gray rounded-full flex justify-center items-center text-brand-primary mr-6 shrink-0 shadow-sm">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Phone Number</h4>
                      <p className="text-brand-subtext"><a href="tel:0096877349876" className="hover:text-brand-primary transition-colors">00968 7734 9876</a></p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-gray rounded-full flex justify-center items-center text-brand-primary mr-6 shrink-0 shadow-sm">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Email Address</h4>
                      <p className="text-brand-subtext"><a href="mailto:info@primeglobaloman.com" className="hover:text-brand-primary transition-colors">info@primeglobaloman.com</a></p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-gray rounded-full flex justify-center items-center text-brand-primary mr-6 shrink-0 shadow-sm">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Working Hours</h4>
                      <p className="text-brand-subtext">Mon - Sat: 8:00 AM - 5:00 PM</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-gray p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-6">Send Us A Message</h3>
               <form className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-brand-navy font-semibold mb-2">Full Name <span className="text-brand-primary">*</span></label>
                   <input type="text" id="name" placeholder="John Doe" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" required />
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="email" className="block text-brand-navy font-semibold mb-2">Email Address <span className="text-brand-primary">*</span></label>
                     <input type="email" id="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" required />
                   </div>
                   <div>
                     <label htmlFor="phone" className="block text-brand-navy font-semibold mb-2">Phone Number</label>
                     <input type="tel" id="phone" placeholder="+1 234 567 890" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="subject" className="block text-brand-navy font-semibold mb-2">Subject</label>
                   <input type="text" id="subject" placeholder="How can we help?" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-brand-navy font-semibold mb-2">Message <span className="text-brand-primary">*</span></label>
                   <textarea id="message" rows={5} placeholder="Your message here..." className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-y" required></textarea>
                 </div>
                 
                 <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded hover:bg-orange-600 transition-colors uppercase tracking-wider shadow-md transform hover:-translate-y-0.5">
                   Send Message
                 </button>
               </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        {/* Placeholder for iframe map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3919.5080088014585!2d106.65780331480082!3d10.772346692323932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec17eb660d1%3A0xc3fec3f1362095cc!2s319%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20Ph%C6%B0%E1%BB%9Dng%2015%2C%20Qu%E1%BA%ADn%2011%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1655000000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </section>
    </div>
  );
}
