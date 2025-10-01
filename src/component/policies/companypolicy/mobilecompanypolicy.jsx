"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import policies from "@/data/policies"; 

export default function CompanypolicyMobile() {
  const router = useRouter();
  const underlineRef = useRef(null);

  const handleReadMore = (id) => {
    router.push(`/policy/${id}`);
  };

  useEffect(() => {
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="px-4 py-4 sm:hidden">
      <h2 className="text-xl font-bold mb-6 relative inline-block text-gray-800">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE]"
        ></span>
        Company Policies
      </h2>
      <div className="flex flex-col gap-7">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-[1px_1px_10px_lightgray] p-4 hover:shadow-[1px_1px_10px_lightgray] transition-transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={policy.img}
                alt={policy.title}
                width={80}
                height={80}
                className="mb-3 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{policy.desc}</p>
              <button
                onClick={() => handleReadMore(policy.id)}
                className="bg-[#018ABE] text-white px-3 py-1 rounded text-sm"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
