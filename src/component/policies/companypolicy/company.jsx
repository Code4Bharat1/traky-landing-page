"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const policies = [
  {
    title: "Leave Policy",
    desc: "Our company offers a comprehensive leave policy designed to support the well-being and work-life balance of all employees. Employees are entitled to paid vacation, sick leave, and emergency leaves. We encourage everyone to utilize their time off to recharge and maintain productivity.",
    img: "/policy.png",
    link: "/policy/policy1",
  },
  {
    title: "Business Travel Policy",
    desc: "A company’s business travel policy outlines the rules, procedures, and expectations for employees traveling on behalf of the organization. It includes booking procedures, reimbursement processes, allowable expenses, and safety guidelines.",
    img: "/business.png",
    link: "/policy/policy2",
  },
  {
    title: "Health Insurance Policy",
    desc: "The company offers comprehensive health insurance that covers hospital stays, surgeries, and medical treatments for employees and their immediate family members. Regular health check-ups and wellness programs are also included.",
    img: "/health.png",
    link: "/policy/policy3",
  },
  {
    title: "Work From Home Policy",
    desc: "Employees need to have completed 6 months of continuous service to be eligible for WFH. WFH is subject to manager approval and availability of necessary equipment. Regular check-ins and performance tracking continue remotely.",
    img: "/home.png",
    link: "/policy/policy4",
  },
  {
    title: "Employee Conduct Policy",
    desc: "Employee conduct policies establish the standards of behavior expected from all employees within a company. These include punctuality, professionalism, respect, ethical conduct, and adherence to company rules and laws.",
    img: "/employee.png",
    link: "/policy/policy5",
  },
  {
    title: "Overtime Policy",
    desc: "Employees are compensated for working beyond their regular hours in accordance with labor regulations and company guidelines. Overtime work must be pre-approved by managers and is tracked for payroll purposes.",
    img: "/overtime.png",
    link: "/policy/policy6",
  },
];

export default function Companypolicy() {
  const router = useRouter();
  const underlineRef = useRef(null);

  const handleReadMore = (link) => {
    router.push(link);
  };

  // GSAP underline animation
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
    <div className="w-full min-h-screen px-6 py-8 overflow-x-hidden bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 relative inline-block text-gray-800">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-0"
        ></span>
        Company Policies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition-transform hover:-translate-y-1 flex flex-col sm:flex-row"
          >
            <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0">
              <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{policy.desc}</p>
              <button
                onClick={() => handleReadMore(policy.link)}
                className="bg-[#018ABE] text-white px-4 py-2 rounded-md text-sm hover:bg-[#01678a] transition cursor-pointer"
                aria-label={`Read more about ${policy.title}`}
              >
                Read more
              </button>
            </div>
            <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src={policy.img}
                alt={policy.title}
                width={100}
                height={100}
                className="object-contain max-w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
