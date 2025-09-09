import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'; // ✅ use Next.js Image

const Navbar = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const handleLogin = () => {
        onNavigate('login');
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div
                    className="flex items-center cursor-pointer"
                    onClick={() => onNavigate('home')}
                    >
                    <Image
                        src="/trakylogo.png"
                        alt="Traky Logo"
                        width={100}
                        height={100}
                        unoptimized   // ✅ prevents blur for static logos
                        className="object-contain m-0 p-0"
                    />
                    <span className="-ml-4 text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
                        Traky
                    </span>
                    </div>






                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-blue-900 hover:text-blue-500 transition-colors font-medium"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-blue-900 hover:text-blue-500 transition-colors font-medium"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-blue-900 hover:text-blue-500 transition-colors font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={handleLogin}
                            className="text-blue-900 hover:text-blue-500 transition-colors font-medium"
                        >
                            Login
                        </button>
                       <button className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                        Get Started
                        </button>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-blue-900 hover:text-blue-500 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 py-4 shadow-xl">
                        <div className="flex flex-col space-y-4 px-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-blue-900 hover:text-blue-500 transition-colors font-medium text-left"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="text-blue-900 hover:text-blue-500 transition-colors font-medium text-left"
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-blue-900 hover:text-blue-500 transition-colors font-medium text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={handleLogin}
                                className="text-blue-900 hover:text-blue-500 transition-colors font-medium text-left"
                            >
                                Login
                            </button>
                            <button className="bg-gradient-to-r from-white via-blue-500 to-blue-900 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
