import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Introduction | Prime Global Oman',
  description: 'Learn more about Prime Global Oman and our commitment to excellence.',
};

export default function Introduction() {
  return (
    <div className="w-full">
      {/* Breadcrumb Hero */}
      <section className="relative w-full h-[300px] flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.png" 
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/images/service2.png" 
                alt="About Prime Global Oman" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div>
               <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">About Prime Global Oman</span>
               <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-6">Introduction Prime Global Oman</h2>
               
               <div className="space-y-6 text-brand-subtext leading-relaxed">
                 <p>
                   Prime Global Oman (Prime Global Oman) was established with a mission to simplify global trade. We have grown into one of the leading logistics operators, offering a full spectrum of supply chain solutions.
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
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-brand-primary">
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-4 uppercase">Our Mission</h3>
               <p className="text-brand-subtext leading-relaxed">
                 To provide innovative, reliable, and cost-effective logistics solutions that empower our clients' businesses to thrive in the global marketplace. We strive to exceed expectations through operational excellence and dedicated customer support.
               </p>
            </div>
            <div className="bg-brand-navy p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-brand-primary text-white">
               <h3 className="text-2xl font-montserrat font-bold mb-4 uppercase">Our Vision</h3>
               <p className="text-gray-300 leading-relaxed">
                 To be the most trusted and preferred logistics partner globally, recognized for our commitment to sustainability, continuous improvement, and driving seamless supply chains worldwide.
               </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short CTA */}
      <section className="py-16 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-montserrat font-bold mb-6">Ready to optimize your logistics?</h2>
           <Link href="/contact">
             <button className="bg-white text-brand-navy font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors uppercase tracking-wider shadow-lg">
               Contact Us Today
             </button>
           </Link>
        </div>
      </section>
    </div>
  );
}
