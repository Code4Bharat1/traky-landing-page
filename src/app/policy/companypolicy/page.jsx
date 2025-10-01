"use client";
import React, { useState } from "react";
import Companypolicy from "@/component/policies/companypolicy/company";
import CompanypolicyMobile from "@/component/policies/companypolicy/mobilecompanypolicy";

export default function Page() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop */}
      <div className="hidden md:block ml-[16.6667%] mt-16 p-6 h-[calc(100vh-64px)] overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <Companypolicy />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-16 p-6 h-[calc(100vh-64px)] overflow-y-auto bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <CompanypolicyMobile />
        </div>
      </div>
    </div>
  );
}
