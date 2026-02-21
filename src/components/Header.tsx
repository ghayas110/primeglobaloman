import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-gray text-brand-subtext text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
           <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-brand-primary" />
                <span>00968 7734 9876</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-brand-primary" />
                <span>info@primeglobaloman.com</span>
              </div>
           </div>
        </div>
        <div className="flex items-center space-x-4 w-full justify-between md:justify-end md:w-auto">
          <div className="flex md:hidden items-center space-x-2">
              <FaPhoneAlt className="text-brand-primary" />
              <span>00968 7734 9876</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-brand-primary transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">
              <FaYoutube />
            </Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 px-4 md:px-8 border-b border-gray-100 flex justify-between items-center shadow-sm relative z-50">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-16">
            <Image
              src="/images/logo.png"
              alt="Prime Global Oman Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase"
          >
            Home
          </Link>
          <Link
            href="/introduction"
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase"
          >
            Introduce
          </Link>
          <Link
            href="/services"
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase"
          >
            Service
          </Link>
          <Link
            href="/contact"
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href="tel:0096877349876"
            className="bg-brand-primary text-white px-6 py-2.5 rounded hover:bg-orange-600 transition-colors font-bold flex items-center shadow-md transform hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="mr-2" /> CALL: 00968 7734 9876
          </a>
        </div>
        
        {/* Mobile Menu Button - Placeholder */}
        <button className="md:hidden text-brand-secondary text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}
