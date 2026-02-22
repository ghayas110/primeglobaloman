import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0c0f] border-t-4 border-brand-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Contact Us */}
          <div className="lg-col-span-2">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded inline-block mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Image
                src="/images/logo.png"
                alt="THE NIAZI'S LOGISTICS Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 mr-3 text-white" />
                <span>New Quaid e Azam Truck Stand، Plot # 455 A Gate. 3 street no. 3, Hawksbay Rd, Karachi, 75760</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="flex-shrink-0 mr-3 text-white" />
                <a href="tel:0769220162" className="hover:text-gray-200 transition-colors">+92 304 2796697</a>
              </li>
            
              <li className="flex items-center">
                <FaEnvelope className="flex-shrink-0 mr-3 text-white" />
                <a href="mailto:info@niazlogistics.com" className="hover:text-gray-200 transition-colors">info@niazlogistics.com</a>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-montserrat uppercase">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/introduction" className="hover:underline transition-all">Introduce</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-all">Partner</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-all">Vision - Mission</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition-all">Core Values</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition-all">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Feature News */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-montserrat uppercase">News</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline transition-all line-clamp-2">How to build a business that will last...</Link>
                <span className="text-sm text-gray-200">Jan 16, 2019</span>
              </li>
              <li className="pt-2">
                <Link href="#" className="hover:underline transition-all line-clamp-2">Where to find the best inspiration for...</Link>
                <span className="text-sm text-gray-200">Jan 16, 2019</span>
              </li>
              <li className="pt-2">
                <Link href="#" className="hover:underline transition-all line-clamp-2">The best resources for web design...</Link>
                <span className="text-sm text-gray-200">Jan 16, 2019</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-montserrat uppercase">Service</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:underline transition-all">Inland transportation</Link></li>
              <li><Link href="/services" className="hover:underline transition-all">Domestic rail transport</Link></li>
              <li><Link href="/services" className="hover:underline transition-all">Domestic sea transport</Link></li>
              <li><Link href="/services" className="hover:underline transition-all">Cross border transportation</Link></li>
              <li><Link href="/services" className="hover:underline transition-all">Warehouse management</Link></li>
              <li><Link href="/services" className="hover:underline transition-all">Cold chain solutions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} THE NIAZI'S LOGISTICS. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1c23] border border-white/10 text-brand-accent flex items-center justify-center hover:bg-white/10 transition-colors shadow-[0_0_10px_rgba(255,179,0,0.1)]">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1c23] border border-white/10 text-brand-accent flex items-center justify-center hover:bg-white/10 transition-colors shadow-[0_0_10px_rgba(255,179,0,0.1)]">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1c23] border border-white/10 text-brand-accent flex items-center justify-center hover:bg-white/10 transition-colors shadow-[0_0_10px_rgba(255,179,0,0.1)]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
