import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-6 text-gray-700">
        <ul>
          <li className="font-bold mb-4 text-gray-900">Popular Locations</li>
          <li>Kolkata</li>
          <li>Mumbai</li>
          <li>Chennai</li>
          <li>Pune</li>
        </ul>

        <ul>
          <li className="font-bold mb-4 text-gray-900">Trending Locations</li>
          <li>Bhubaneshwar</li>
          <li>Hyderabad</li>
          <li>Chandigarh</li>
          <li>Nashik</li>
        </ul>

        <ul>
          <li className="font-bold mb-4 text-gray-900">About Us</li>
          <li>Tech @ OLX</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li className="font-bold mb-4 text-gray-900">OLX</li>
          <li>Blog</li>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Legal & Privacy Information</li>
          <li>Vulnerability Disclosure Program</li>
        </ul>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
         All rights reserved. © {new Date().getFullYear()} OLX.
      </div>
    </footer>
  );
};

export default Footer;
