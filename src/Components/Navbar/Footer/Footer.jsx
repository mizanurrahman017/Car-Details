import React from "react";
import { FaCar, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            <FaCar className="text-red-500 text-2xl" />
            CarInfo
          </div>

          <p className="mt-4 text-sm">
            Discover detailed information about all types of cars including
            specifications, performance, features, and pricing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Cars</li>
            <li className="hover:text-red-500 cursor-pointer">Brands</li>
            <li className="hover:text-red-500 cursor-pointer">Compare</li>
          </ul>
        </div>

        {/* Car Brands */}
        <div>
          <h2 className="text-white font-semibold mb-4">Popular Brands</h2>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Toyota</li>
            <li className="hover:text-red-500 cursor-pointer">BMW</li>
            <li className="hover:text-red-500 cursor-pointer">Tesla</li>
            <li className="hover:text-red-500 cursor-pointer">Mercedes</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>

          <p className="mt-4 text-sm">
            Email: info@carinfo.com  
            <br />
            Phone: +880 1234-567890
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} CarInfo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;