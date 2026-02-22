import Image from 'next/image';
import Link from 'next/link';
import { FaTruckMoving, FaTrain, FaShip, FaGlobeAmericas, FaWarehouse, FaSnowflake, FaChevronRight } from 'react-icons/fa';

export const metadata = {
  title: 'Services | THE NIAZI\'S LOGISTICS',
  description: 'Comprehensive logistics, transportation, and warehousing services by THE NIAZI\'S LOGISTICS.',
};

export default function Services() {
  return (
    <div className="w-full  min-h-screen pb-24">
      {/* Breadcrumb Hero */}
      <section className="relative w-full h-[300px] flex justify-center items-center mb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service2.jpg" 
            alt="Services Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white uppercase tracking-wider mb-4">
            Service
          </h1>
          <div className="flex items-center justify-center space-x-2 text-white font-medium">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-primary">Service</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-xl border border-white/10 p-6">
             <h3 className="text-xl font-montserrat font-bold text-brand-navy mb-4 border-b border-white/10 pb-2">All Services</h3>
             <ul className="space-y-2">
               <SidebarLink href="#inland" text="Inland transportation" active />
               <SidebarLink href="#rail" text="Domestic rail transport" />
               <SidebarLink href="#sea" text="Domestic sea transport" />
               <SidebarLink href="#border" text="Cross border transport" />
               <SidebarLink href="#warehouse" text="Warehouse management" />
               <SidebarLink href="#cold" text="Cold chain solutions" />
             </ul>
          </div>

          <div className="bg-brand-primary text-white rounded-lg shadow-md p-6 text-center text-sm">
             <h4 className="font-montserrat font-bold text-lg mb-2">Need Help?</h4>
             <p className="mb-4 text-gray-100">Contact our experts for a customized logistics solution.</p>
             <Link href="/contact">
               <button className="bg-[#1a1c23] text-brand-accent font-bold py-2 px-6 rounded hover:bg-white/10 transition-colors w-full uppercase shadow-[0_0_15px_rgba(255,179,0,0.3)]">
                 Contact Us
               </button>
             </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-16">
          <ServiceSection 
            id="inland"
            icon={<FaTruckMoving className="text-5xl text-brand-primary mb-6" />}
            title="Inland Transportation"
            description="Our inland transportation network covers the entire region, offering FTL (Full Truckload) and LTL (Less Than Truckload) services safely and efficiently. We utilize a modern fleet equipped with real-time GPS tracking to ensure complete visibility of your cargo from pickup to delivery. Whether it's standard goods or specialized equipment, our team creates optimized routes to reduce transit times and costs."
            image="/images/service.jpg"
          />

          <ServiceSection 
            id="rail"
            icon={<FaTrain className="text-5xl text-brand-primary mb-6 animate-pulse" />}
            title="Domestic Rail Transport"
            description="Leveraging the country's rail network, we provide a cost-effective and environmentally friendly alternative to road transport. Our rail freight services are ideal for heavy, bulky, or high-volume shipments over long distances. We offer seamless door-to-door solutions by intermodal integration of rail and trucking, ensuring secure handling throughout the journey."
            image="/images/service2.jpg"
            reverse
          />

          <ServiceSection 
            id="sea"
            icon={<FaShip className="text-5xl text-brand-primary mb-6" />}
            title="Domestic Sea Transport"
            description="Coastal shipping services optimized for bulk and containerized cargo. With frequent sailings connecting major ports, we offer a highly efficient domestic alternative for non-time-sensitive shipments. We manage full vessel charters, less-than-container loads, and ensure smooth port-to-door transitions for all cargo types."
            image="/images/service.jpg"
          />

          <ServiceSection 
            id="border"
            icon={<FaGlobeAmericas className="text-5xl text-brand-primary mb-6" />}
            title="Cross Border Transportation"
            description="Seamless customs clearance and international freight forwarding across neighboring countries. Our team navigates complex regulatory environments, ensuring compliance and expediting transit times. From documentation processing to border crossings, we provide uninterrupted door-to-door delivery solutions for a truly global reach."
            image="/images/service2.jpg"
            reverse
          />

          <ServiceSection 
            id="warehouse"
            icon={<FaWarehouse className="text-5xl text-brand-primary mb-6" />}
            title="Warehouse Management"
            description="State-of-the-art warehousing facilities and inventory management designed to streamline your supply chain. Our secure, strategically located warehouses feature integrated Warehouse Management Systems (WMS) for real-time inventory tracking, dedicated areas for cross-docking, and comprehensive value-added services seamlessly aligning with your distribution strategies."
            image="/images/service.jpg"
          />

          <ServiceSection 
            id="cold"
            icon={<FaSnowflake className="text-5xl text-brand-primary mb-6" />}
            title="Cold Chain Solutions"
            description="Temperature-controlled logistics specializing in the secure transport of sensitive and perishable goods. Utilizing modern refrigerated transport units and climate-controlled storage facilities, we strictly maintain necessary temperature ranges. We monitor environmental conditions 24/7 to guarantee the integrity of pharmaceuticals, food products, and other delicate cargo."
            image="/images/service2.jpg"
            reverse
          />

           <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/10 border-l-4 border-l-brand-secondary hover:shadow-2xl transition-all duration-300">
               <FaGlobeAmericas className="text-4xl text-brand-secondary mb-4" />
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-3">Global Fast Delivery</h3>
               <p className="text-brand-subtext">Our expansive international network ensures your deliveries cross borders smoothly with expert customs clearance agents operating 24/7.</p>
             </div>
             
             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/10 border-l-4 border-l-brand-primary hover:shadow-2xl transition-all duration-300">
               <FaWarehouse className="text-4xl text-brand-primary mb-4" />
               <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-3">Secure Warehousing</h3>
               <p className="text-brand-subtext">State-of-the-art facilities equipped with 24/7 surveillance, climate control, and advanced inventory management systems (WMS).</p>
             </div>
           </div>

           {/* Stats Section inside Services */}
           <div className="bg-gradient-to-br from-brand-primary to-[#800000] rounded-xl p-8 md:p-12 text-white shadow-[0_0_20px_rgba(204,0,0,0.6)] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <FaShip className="text-9xl" />
             </div>
             <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 relative z-10">Our Track Record</h3>
             
             <div className="space-y-6 relative z-10">
               <StatBar label="Deliveries Completed" percentage="98%" width="w-[98%]" />
               <StatBar label="Warehouse Utilization" percentage="85%" width="w-[85%]" />
               <StatBar label="Client Satisfaction" percentage="100%" width="w-full" />
             </div>
           </div>

        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, text, active = false }: { href: string, text: string, active?: boolean }) {
  return (
    <li>
      <Link 
        href={href} 
        className={`flex items-center justify-between p-3 rounded transition-colors group ${active ? 'bg-brand-primary text-white font-bold' : 'text-brand-subtext hover:bg-white/10 hover:text-brand-accent'}`}
      >
        <span>{text}</span>
        <FaChevronRight className={`text-xs ${active ? 'text-white' : 'text-gray-400 group-hover:text-brand-primary'}`} />
      </Link>
    </li>
  )
}

function ServiceSection({ id, icon, title, description, image, reverse = false }: { id: string, icon: React.ReactNode, title: string, description: string, image: string, reverse?: boolean }) {
  return (
    <div id={id} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow`}>
      <div className="w-full md:w-1/2 relative h-[300px] rounded-lg overflow-hidden shrink-0">
        <Image src={image} alt={title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="w-full md:w-1/2">
        {icon}
        <h2 className="text-3xl font-montserrat font-bold text-brand-navy mb-4">{title}</h2>
        <div className="w-16 h-1 bg-brand-primary mb-6"></div>
        <p className="text-brand-subtext leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  )
}

function StatBar({ label, percentage, width }: { label: string, percentage: string, width: string }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold">{label}</span>
        <span className="font-bold text-brand-primary">{percentage}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3">
        <div className={`bg-brand-primary h-3 rounded-full ${width}`}></div>
      </div>
    </div>
  )
}
