import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Introduction | THE NIAZI\'S LOGISTICS',
  description: 'Learn more about THE NIAZI\'S LOGISTICS and our commitment to excellence.',
};

export default function Introduction() {
  return (
    <div className="w-full">
      {/* Breadcrumb Hero */}
      <section className="relative w-full h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.jpg" 
            alt="Introduction Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white uppercase tracking-wider mb-4">
            Introduce
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white font-medium">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-primary">Introduce</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative mt-0 [clip-path:polygon(0_0,100%_4vw,100%_100%,0_calc(100%-4vw))] bg-[#0f1115]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/images/service2.jpg" 
                alt="About THE NIAZI'S LOGISTICS" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div>
               <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">About THE NIAZI'S LOGISTICS</span>
               <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-6">Introduction THE NIAZI'S LOGISTICS</h2>
               
               <div className="space-y-6 text-brand-subtext leading-relaxed">
                 <p>
                   THE NIAZI'S LOGISTICS (THE NIAZI'S LOGISTICS) was established with a mission to simplify global trade. We have grown into one of the leading logistics operators, offering a full spectrum of supply chain solutions.
                 </p>
                 <p>
                   Our expertise spans across Sea Freight, Air Freight, Road Transport, and comprehensive Warehouse Management. We pride ourselves on delivering customized solutions that meet the unique requirements of each client, regardless of their industry.
                 </p>
                 <p>
                   With a dedicated team of professionals and a state-of-the-art global network, we ensure your cargo is handled with the utmost care, efficiency, and transparency from origin to destination.
                 </p>
               </div>

               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3">
                   <FaCheckCircle className="text-brand-primary text-xl" />
                   <span className="font-semibold text-brand-navy">Fast Delivery</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <FaCheckCircle className="text-brand-primary text-xl" />
                   <span className="font-semibold text-brand-navy">Secured Services</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <FaCheckCircle className="text-brand-primary text-xl" />
                   <span className="font-semibold text-brand-navy">Worldwide Shipping</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <FaCheckCircle className="text-brand-primary text-xl" />
                   <span className="font-semibold text-brand-navy">24/7 Support</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-brand-gray [clip-path:polygon(0_4vw,100%_0,100%_calc(100%-4vw),0_100%)]">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-t-brand-primary border border-white/10">
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-4 uppercase">Our Mission</h3>
               <p className="text-brand-subtext leading-relaxed">
                 To provide innovative, reliable, and cost-effective logistics solutions that empower our clients' businesses to thrive in the global marketplace. We strive to exceed expectations through operational excellence and dedicated customer support.
               </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-t-brand-secondary border border-white/10 text-white">
               <h3 className="text-2xl font-montserrat font-bold mb-4 uppercase text-brand-secondary">Our Vision</h3>
               <p className="text-gray-300 leading-relaxed">
                 To be the most trusted and preferred logistics partner globally, recognized for our commitment to sustainability, continuous improvement, and driving seamless supply chains worldwide.
               </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-primary to-[#800000] text-white text-center shadow-[0_0_20px_rgba(204,0,0,0.4)]">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-montserrat font-bold mb-6">Ready to optimize your logistics?</h2>
           <Link href="/contact">
             <button className="bg-[#1a1c23] text-brand-accent font-bold py-3 px-8 rounded hover:bg-white/10 transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(255,179,0,0.3)] border border-white/10">
               Contact Us Today
             </button>
           </Link>
        </div>
      </section>
    </div>
  );
}
