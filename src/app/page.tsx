"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTruckMoving, FaTrain, FaShip, FaGlobeAmericas, FaWarehouse, FaSnowflake, FaBox, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  const [trackingId, setTrackingId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrackingLoading, setIsTrackingLoading] = useState(false);

  const handleTrackingSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!trackingId.trim()) return;
    setIsModalOpen(true);
    setIsTrackingLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setIsTrackingLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.jpg" 
            alt="Logistics Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <span className="text-brand-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Welcome to THE NIAZI'S LOGISTICS</span>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 uppercase max-w-4xl">
            THE NIAZI'S LOGISTICS
          </h1>
          <p className="text-gray-200 mb-8 max-w-2xl text-lg md:text-xl">
            We provide fast, reliable, and secure logistics solutions tailored to meet your business needs, connecting you globally with excellence.
          </p>
          <button className="bg-brand-primary text-white font-bold py-3 px-8 rounded hover:bg-brand-secondary transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(204,0,0,0.6)] transform hover:-translate-y-1">
            See Detail
          </button>
        </div>
        
        {/* Tracking Box */}
        <div className="absolute -bottom-16 left-0 right-0 z-20 container mx-auto px-4 md:px-8 max-w-4xl hidden md:block">
           <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center border border-white/20">
             <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-brand-accent font-bold text-xl uppercase font-montserrat">Booking & Tracking</h3>
                <p className="text-gray-300 text-sm">Enter your tracking number below</p>
             </div>
             <form className="w-full md:w-2/3 flex" onSubmit={handleTrackingSubmit}>
               <input 
                 type="text" 
                 value={trackingId}
                 onChange={(e) => setTrackingId(e.target.value)}
                 placeholder="Enter tracking ID..." 
                 className="flex-grow bg-white/5 border border-white/20 text-white rounded-l px-4 py-3 focus:outline-none focus:border-brand-primary placeholder-gray-500"
               />
               <button type="submit" className="bg-brand-secondary text-white font-bold px-6 py-3 rounded-r hover:bg-brand-primary transition-colors shadow-[0_0_15px_rgba(216,67,21,0.5)]">
                 TRACKING
               </button>
             </form>
           </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 relative mt-16 md:mt-0 [clip-path:polygon(0_0,100%_4vw,100%_100%,0_calc(100%-4vw))] bg-brand-gray">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
             <Image 
                src="/images/service2.jpg" 
                alt="Introduction Graphic" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>
          <div>
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Introduction</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-6">Introduction THE NIAZI'S LOGISTICS</h2>
            <p className="text-brand-subtext mb-6 leading-relaxed">
              THE NIAZI'S LOGISTICS (THE NIAZI'S LOGISTICS) is a leading provider of end-to-end supply chain solutions. We combine intercontinental Air and Ocean Freight with comprehensive Value-Added Logistics Services and Supply Chain Services. The range of Supply Chain Solutions can vary from simple transport or storage up to complex operations.
            </p>
            <p className="text-brand-subtext mb-8 leading-relaxed">
              We optimize all activities around information, material and financial flow. We provide globally integrated end-to-end solutions tailored to our customers supply chain management needs with a special commitment to industry specific requirements.
            </p>
            <Link href="/introduction">
              <span className="inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded hover:bg-brand-primary transition-colors cursor-pointer uppercase text-sm tracking-wider shadow-[0_0_15px_rgba(216,67,21,0.5)]">
                See Detail
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2">Service THE NIAZI'S LOGISTICS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaTruckMoving className="text-4xl text-brand-primary mb-4" />}
              title="Inland Transportation"
              description="Reliable and secure overland transportation for all your cargo needs."
              
            />
             <ServiceCard 
              icon={<FaTrain className="text-4xl text-brand-primary mb-4" />}
              title="Domestic Rail"
              description="Efficient and cost-effective rail freight solutions across the country."
            />
             <ServiceCard 
              icon={<FaShip className="text-4xl text-brand-primary mb-4" />}
              title="Domestic Sea"
              description="Coastal shipping services optimized for bulk and containerized cargo."
            />
             <ServiceCard 
              icon={<FaGlobeAmericas className="text-4xl text-brand-primary mb-4" />}
              title="Cross Border Transportation"
              description="Seamless customs clearance and international freight forwarding."
            />
             <ServiceCard 
              icon={<FaWarehouse className="text-4xl text-brand-primary mb-4" />}
              title="Warehouse Management"
              description="State-of-the-art warehousing facilities and inventory management."
            />
             <ServiceCard 
              icon={<FaSnowflake className="text-4xl text-brand-primary mb-4" />}
              title="Cold Chain"
              description="Temperature-controlled logistics for sensitive and perishable goods."
            />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-32 bg-brand-gray [clip-path:polygon(0_4vw,100%_0,100%_calc(100%-4vw),0_100%)]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl py-8">
           <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Why People Choose Us</span>
           <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-16">The Core Values</h2>
           
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <div className="flex flex-col bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl">
                <span className="text-6xl font-bold text-brand-accent opacity-30 font-montserrat mb-4">01</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Global Coverage</h3>
                <p className="text-brand-subtext">Extensive worldwide network ensuring your cargo reaches any destination efficiently and on time.</p>
             </div>
             <div className="flex flex-col bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl">
                <span className="text-6xl font-bold text-brand-accent opacity-30 font-montserrat mb-4">02</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">On-time Delivery</h3>
                <p className="text-brand-subtext">Optimized routing and dedicated fleets to guarantee your shipments arrive exactly when expected.</p>
             </div>
              <div className="flex flex-col bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl">
                <span className="text-6xl font-bold text-brand-accent opacity-30 font-montserrat mb-4">03</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Reliable Support</h3>
                <p className="text-brand-subtext">24/7 dedicated customer service and real-time tracking to keep you informed every step of the way.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Tracking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="bg-[#1a1c23] border border-white/10 rounded-xl shadow-[0_0_30px_rgba(255,179,0,0.15)] w-full max-w-lg overflow-hidden relative">
            {/* Header */}
            <div className="bg-brand-gray p-6 border-b border-white/5 flex justify-between items-center">
               <h3 className="text-xl font-montserrat font-bold text-white uppercase flex items-center">
                 <FaBox className="mr-3 text-brand-primary" />
                 Tracking Details
               </h3>
               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors text-2xl leading-none h-6 w-6 flex items-center justify-center">
                  &times;
               </button>
            </div>
            
            {/* Body */}
            <div className="p-8">
               {isTrackingLoading ? (
                 <div className="flex flex-col items-center justify-center py-8 space-y-4">
                   <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(204,0,0,0.5)]"></div>
                   <p className="text-brand-subtext animate-pulse font-montserrat tracking-widest uppercase">Locating shipment {trackingId}...</p>
                 </div>
               ) : (
                 <div className="space-y-6">
                   <div className="flex justify-between items-center p-5 bg-white/5 border border-white/10 rounded-lg shadow-inner">
                      <div>
                        <p className="text-xs text-brand-subtext uppercase tracking-wider mb-1">Tracking Number</p>
                        <p className="text-xl font-bold text-brand-accent tracking-widest">{trackingId}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-brand-subtext uppercase tracking-wider mb-1">Status</p>
                        <div className="flex items-center text-green-500 font-bold tracking-wider">
                           <FaCheckCircle className="mr-2" />
                           IN TRANSIT
                        </div>
                      </div>
                   </div>

                   <div className="relative border-l-2 border-brand-primary/30 ml-3 space-y-8 pb-2 mt-8">
                      <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-brand-primary rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(204,0,0,0.8)] border border-white/20"></div>
                         <h4 className="text-white font-bold mb-1 uppercase tracking-wide">Dispatched from Source</h4>
                         <p className="text-brand-subtext text-sm">Karachi, Pakistan - {(new Date()).toLocaleDateString()}</p>
                      </div>
                      <div className="relative pl-6">
                         <div className="absolute w-4 h-4 bg-white/10 rounded-full -left-[9px] top-1 border border-white/20"></div>
                         <h4 className="text-gray-400 font-bold mb-1 uppercase tracking-wide">Arriving at Destination</h4>
                         <p className="text-gray-500 text-sm">Estimated: 3-5 Business Days</p>
                      </div>
                   </div>
                   
                   <button 
                     onClick={() => setIsModalOpen(false)}
                     className="w-full mt-6 bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-brand-secondary transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(204,0,0,0.4)]"
                   >
                     Close Window
                   </button>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/10 hover:border-brand-primary transition-all duration-300 group cursor-pointer">
      <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-montserrat text-brand-navy mb-3">{title}</h3>
      <p className="text-brand-subtext mb-4">{description}</p>
      <Link href="/services">
        <span className="text-brand-accent font-semibold hover:text-brand-primary transition-colors inline-flex items-center">
          See more <span className="ml-2">→</span>
        </span>
      </Link>
    </div>
  )
}
