"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-brand-gray text-brand-subtext text-sm py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-6">
           <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-brand-primary" />
                <span>+92 304 2796697</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-brand-primary" />
                <span>info@niazlogistics.com</span>
              </div>
           </div>
        </div>
        <div className="flex items-center space-x-4 w-full justify-between md:justify-end md:w-auto">
          <div className="flex md:hidden items-center space-x-2">
              <FaPhoneAlt className="text-brand-primary" />
              <span>+92 304 2796697</span>
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
      <div className="bg-[#0f1115]/90 backdrop-blur-md py-4 px-4 md:px-8 border-b border-white/10 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] relative z-50">
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-16">
            <Image
              src="/images/logo.png"
              alt="THE NIAZI'S LOGISTICS Logo"
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
            className="bg-brand-primary text-white px-6 py-2.5 rounded hover:bg-brand-secondary transition-colors font-bold flex items-center shadow-[0_0_15px_rgba(204,0,0,0.5)] transform hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="mr-2" /> CALL: +92 304 2796697
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-secondary text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1115] shadow-2xl absolute top-full left-0 w-full z-40 border-t border-white/10 flex flex-col">
          <Link
            href="/"
            onClick={toggleMobileMenu}
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase py-4 px-6 border-b border-white/5"
          >
            Home
          </Link>
          <Link
            href="/introduction"
            onClick={toggleMobileMenu}
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase py-4 px-6 border-b border-white/5"
          >
            Introduce
          </Link>
          <Link
            href="/services"
            onClick={toggleMobileMenu}
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase py-4 px-6 border-b border-white/5"
          >
            Service
          </Link>
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="text-brand-text hover:text-brand-primary font-bold transition-colors uppercase py-4 px-6 border-b border-white/5"
          >
            Contact
          </Link>
          <div className="p-6">
            <a
              href="tel:0096877349876"
              className="bg-brand-primary text-white px-6 py-3 rounded hover:bg-brand-secondary transition-colors font-bold flex items-center justify-center uppercase w-full shadow-[0_0_15px_rgba(204,0,0,0.5)]"
            >
              <FaPhoneAlt className="mr-2" /> CALL: +92 304 2796697
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
