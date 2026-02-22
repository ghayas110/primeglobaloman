import Image from 'next/image';
import Link from 'next/link';
import { FaTruckMoving, FaTrain, FaShip, FaGlobeAmericas, FaWarehouse, FaSnowflake } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service.png" 
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
          <button className="bg-brand-primary text-white font-bold py-3 px-8 rounded hover:bg-orange-600 transition-colors uppercase tracking-wider shadow-lg transform hover:-translate-y-1">
            See Detail
          </button>
        </div>
        
        {/* Tracking Box */}
        <div className="absolute -bottom-16 left-0 right-0 z-20 container mx-auto px-4 md:px-8 max-w-4xl hidden md:block">
           <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center border border-gray-100">
             <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-brand-primary font-bold text-xl uppercase font-montserrat">Booking & Tracking</h3>
                <p className="text-brand-subtext text-sm">Enter your tracking number below</p>
             </div>
             <div className="w-full md:w-2/3 flex">
               <input 
                 type="text" 
                 placeholder="Enter tracking ID..." 
                 className="flex-grow border border-gray-300 rounded-l px-4 py-3 focus:outline-none focus:border-brand-primary"
               />
               <button className="bg-brand-secondary text-white font-bold px-6 py-3 rounded-r hover:bg-brand-navy transition-colors">
                 TRACKING
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white mt-16 md:mt-0">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
             <Image 
                src="/images/service2.png" 
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
              <span className="inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded hover:bg-brand-primary transition-colors cursor-pointer uppercase text-sm tracking-wider">
                See Detail
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-gray">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
           <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Why People Choose Us</span>
           <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mt-2 mb-16">The Core Values</h2>
           
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <div className="flex flex-col">
                <span className="text-6xl font-bold text-gray-200 font-montserrat mb-4">01</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Global Coverage</h3>
                <p className="text-brand-subtext">Extensive worldwide network ensuring your cargo reaches any destination efficiently and on time.</p>
             </div>
             <div className="flex flex-col">
                <span className="text-6xl font-bold text-gray-200 font-montserrat mb-4">02</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">On-time Delivery</h3>
                <p className="text-brand-subtext">Optimized routing and dedicated fleets to guarantee your shipments arrive exactly when expected.</p>
             </div>
              <div className="flex flex-col">
                <span className="text-6xl font-bold text-gray-200 font-montserrat mb-4">03</span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Reliable Support</h3>
                <p className="text-brand-subtext">24/7 dedicated customer service and real-time tracking to keep you informed every step of the way.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-brand-primary group cursor-pointer">
      <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-montserrat text-brand-navy mb-3">{title}</h3>
      <p className="text-brand-subtext mb-4">{description}</p>
      <Link href="/services">
        <span className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors inline-flex items-center">
          See more <span className="ml-2">→</span>
        </span>
      </Link>
    </div>
  )
}
