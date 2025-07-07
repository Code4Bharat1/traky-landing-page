'use client'; // Only needed in app/page.jsx (App Router)

import About from '@/component/About';
import CTA from '@/component/CTA';
import Features from '@/component/Features';
import Footer from '@/component/Footer';
import Hero from '@/component/Hero';
import Login from '@/component/Login';
import Navbar from '@/component/Navbar';
import Pricing from '@/component/Pricing';
import Testimonials from '@/component/Testimonials';
import { useState } from 'react';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Navbar onNavigate={setCurrentPage} />
            <Hero />
            <Features />
            <Pricing />
            {/* <Testimonials /> */}
            <About />
            <CTA />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}
