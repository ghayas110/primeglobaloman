import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | THE NIAZI\'S LOGISTICS',
  description: 'Get in touch with THE NIAZI\'S LOGISTICS team today.',
};

export default function Contact() {
  return (
    <div className="w-full">
      {/* Breadcrumb Hero */}
      <section className="relative w-full h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.jpg" 
            alt="Contact Background" 
            fill 
            className="object-cover"
            priority
          />
        <div className="absolute inset-0 bg-black/60"></div>
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

      <section className="py-24 relative mt-0 z-10 [clip-path:polygon(0_0,100%_4vw,100%_100%,0_calc(100%-4vw))] bg-[#0f1115]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 pb-12">
            
            {/* Contact Information */}
            <div>
              <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-8">Contact Information</h2>
              
              <p className="text-brand-subtext mb-10 leading-relaxed">
                We are always ready to assist you with your logistics needs. Feel free to reach out to us using the contact details below or fill out the form, and our team will get back to you promptly.
              </p>

              <div className="space-y-8">
                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1a1c23] border border-white/10 rounded-full flex justify-center items-center text-brand-accent mr-6 shrink-0 shadow-[0_0_10px_rgba(255,179,0,0.2)]">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Head Office</h4>
                      <p className="text-brand-subtext">New Quaid e Azam Truck Stand، Plot # 455 A Gate. 3 street no. 3, Hawksbay Rd, Karachi, 75760</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1a1c23] border border-white/10 rounded-full flex justify-center items-center text-brand-accent mr-6 shrink-0 shadow-[0_0_10px_rgba(255,179,0,0.2)]">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Phone Number</h4>
                      <p className="text-brand-subtext"><a href="tel:0096877349876" className="hover:text-brand-primary transition-colors">+92 304 2796697</a></p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1a1c23] border border-white/10 rounded-full flex justify-center items-center text-brand-accent mr-6 shrink-0 shadow-[0_0_10px_rgba(255,179,0,0.2)]">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat text-lg mb-1">Email Address</h4>
                      <p className="text-brand-subtext"><a href="mailto:info@niazlogistics.com" className="hover:text-brand-primary transition-colors">info@niazlogistics.com</a></p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1a1c23] border border-white/10 rounded-full flex justify-center items-center text-brand-accent mr-6 shrink-0 shadow-[0_0_10px_rgba(255,179,0,0.2)]">
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
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-white/10">
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-6">Send Us A Message</h3>
               <form className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-brand-navy font-semibold mb-2">Full Name <span className="text-brand-primary">*</span></label>
                   <input type="text" id="name" placeholder="John Doe" className="w-full bg-black/20 border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-500" required />
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="email" className="block text-brand-navy font-semibold mb-2">Email Address <span className="text-brand-primary">*</span></label>
                     <input type="email" id="email" placeholder="john@example.com" className="w-full bg-black/20 border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-500" required />
                   </div>
                   <div>
                     <label htmlFor="phone" className="block text-brand-navy font-semibold mb-2">Phone Number</label>
                     <input type="tel" id="phone" placeholder="+1 234 567 890" className="w-full bg-black/20 border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-500" />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="subject" className="block text-brand-navy font-semibold mb-2">Subject</label>
                   <input type="text" id="subject" placeholder="How can we help?" className="w-full bg-black/20 border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder-gray-500" />
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-brand-navy font-semibold mb-2">Message <span className="text-brand-primary">*</span></label>
                   <textarea id="message" rows={5} placeholder="Your message here..." className="w-full bg-black/20 border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-y placeholder-gray-500" required></textarea>
                 </div>
                 
                 <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded hover:bg-brand-secondary transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(204,0,0,0.5)] transform hover:-translate-y-0.5">
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.517433248849!2d67.1805346!3d24.846171299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb31582fc680653%3A0xe7eefcff70140a45!2sThe%20Niazi&#39;s%20Logistics!5e0!3m2!1sen!2s!4v1771786045874!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}
