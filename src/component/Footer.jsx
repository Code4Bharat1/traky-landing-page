"use client";
import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 shadow-[0_-6px_12px_rgba(128,128,128,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center cursor-pointer mb-3">
              <Image
                src="/trakylogo.png"
                alt="Traky Logo"
                width={140}
                height={140}
                unoptimized
                className="object-contain"
              />
              <span className="-ml-4 text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                Traky
              </span>
            </div>

            <p className="text-gray-600 mb-4 max-w-md text-base">
              The ultimate task management solution that helps you stay organized, productive, and focused on what matters most.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Twitter className="w-6 h-6 text-black" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Facebook className="w-6 h-6 text-black" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Instagram className="w-6 h-6 text-black" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="w-6 h-6 text-black" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Github className="w-6 h-6 text-black" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-base font-semibold">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold mb-2">Company</h4>
            <ul className="space-y-1 text-base font-semibold">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-900 pt-3">
          <div className="flex flex-col items-center space-y-1 text-center">
            <p className="text-gray-900 text-base">
              Built with <span className="text-red-500">❤️</span> and passion by{" "}
              <span className="font-semibold text-black">Code4Bharat</span>
            </p>
            <p className="text-gray-900 text-sm">
              © 2011 – 2025 <span className="font-semibold text-black">NexCoreAlliance</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-900">
            <a href="/policy/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="/policy/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="/policy/companypolicy" className="hover:text-gray-900 transition-colors">
              Company Policy
            </a>
          </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
