"use client";
import React, { useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import policies from "@/data/policies";

export default function PolicyDetailPage() {
  const { id } = useParams();
  const policy = policies.find((p) => p.id === id);

  const sectionRef = useRef(null); // ✅ Declare sectionRef
  const underlineRef = useRef(null); // ✅ Declare underlineRef

  useEffect(() => {
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "power2.out" }
      );
    }
  }, [id]);

  if (!policy) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-500">Policy not found</h2>
      </div>
    );
  }


  const renderPolicyDetail = () => {
    switch (id) {
      // ---------------- POLICY 1 ----------------
      case "policy1":
        return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg "
    >
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        LEAVE POLICY
      </h2>

      <p className="text-gray-700 mb-4">
        Our Leave Policy is designed to support employees in maintaining a
        healthy work-life balance while ensuring smooth business operations.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Types of Leave
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Paid Leave:</strong> 12 days annually. Must be approved in
          advance.
        </li>
        <li>
          <strong>Sick Leave:</strong> 8 days annually. No prior approval
          needed but inform ASAP.
        </li>
        <li>
          <strong>Casual Leave:</strong> 5 days annually. For emergencies or
          short personal needs.
        </li>
        <li>
          <strong>Maternity Leave:</strong> Up to 26 weeks as per government
          norms.
        </li>
        <li>
          <strong>Paternity Leave:</strong> Up to 7 days post childbirth.
        </li>
        <li>
          <strong>Unpaid Leave:</strong> Can be taken in special cases with
          manager approval.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Leave Application Process
      </h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>
          Submit leave request through the internal portal or to your manager
          via email.
        </li>
        <li>
          Wait for manager approval before proceeding with travel or absence
          plans.
        </li>
        <li>
          In case of emergency/sick leave, inform your reporting manager as
          early as possible.
        </li>
      </ol>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Leave Balance & Tracking
      </h2>
      <p className="text-gray-700">
        Leave balances are updated monthly. Employees can view their balances
        in the HR system or by contacting HR directly.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Important Notes
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Unused paid leaves can be carried forward up to 30 days.</li>
        <li>Habitual absenteeism may result in disciplinary action.</li>
        <li>
          All leave requests must be made with sufficient notice when possible.
        </li>
      </ul>

      <p className="text-gray-600 mt-6 italic">
        For any clarifications, please contact the HR department.
      </p>
    </div>
  );


      // ---------------- POLICY 2 ----------------
      case "policy2":
        return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg min-h-screen"
    >

      {/* Main Heading with Underline */}
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        Company Travel Policy
      </h2>

      {/* Sections */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow-[1px_1px_10px_lightgray]">
        <h2 className="text-xl font-semibold text-[#018ABE] mb-2">Introduction</h2>
        <p className="text-gray-700">
          When employees travel for company-related purposes, it is{' '}
          <span className="font-semibold">COD4BHARAT</span>'s responsibility to provide safe and reliable travel arrangements.
          This company travel policy serves to clarify the conditions and parameters of a company-paid trip.
        </p>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow-[1px_1px_10px_lightgray]">
        <h2 className="text-xl font-semibold text-[#018ABE] mb-2">Purpose</h2>
        <p className="text-gray-700">
          The purpose of this company travel policy is to (a) outline the authorization and reimbursement process for travel
          arrangements and expenses; (b) to list the company-paid travel expenses; and (c) to establish protocols that
          oversee the travel arrangement process.
        </p>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow-[1px_1px_10px_lightgray]">
        <h2 className="text-xl font-semibold text-[#018ABE] mb-2">Scope</h2>
        <p className="text-gray-700">
          This company travel policy is applicable to all employees under contract at{' '}
          <span className="font-semibold">COD4BHARAT</span>, including paid interns, contractors, and seasonal, part-time,
          and full-time employees. <span className="font-semibold">COD4BHARAT</span> sees traveling out of the city, state,
          and/or country as a fully-paid business trip, as well as one-day trips that are{' '}
          <span className="font-semibold">9</span> hours away from the office.
        </p>
      </section>

      <section className="mb-6 bg-white p-4 rounded-lg shadow-[1px_1px_10px_lightgray]">
        <h2 className="text-xl font-semibold text-[#018ABE] mb-2">Authorization & Reimbursements</h2>
        <p className="text-gray-700">
          All company travel arrangements must be authorized by senior employees at least{' '}
          <span className="font-semibold">4 Weeks/1 Month</span> before the expected travel date, depending on the
          circumstances and the required travel arrangement time period. Employees are not permitted to authorize their own
          travel arrangements.
        </p>
      </section>
    </div>
  );

      // ---------------- POLICY 3 ----------------
      case "policy3":
         return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        HEALTH INSURANCE POLICY
      </h2>

      <p className="text-gray-700 mb-4">
        Our Health Insurance Policy ensures financial security and medical
        assistance for employees and their families, covering a wide range of
        treatments and emergencies.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Policy Coverage
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Hospitalization:</strong> Covers expenses related to inpatient
          treatment, including surgery and room charges.
        </li>
        <li>
          <strong>Day Care Procedures:</strong> Includes treatments that do not
          require 24-hour hospitalization.
        </li>
        <li>
          <strong>Maternity Benefits:</strong> Covers delivery and related
          medical expenses.
        </li>
        <li>
          <strong>Pre & Post Hospitalization:</strong> Coverage for diagnostics
          and medications for 30 days before and 60 days after hospitalization.
        </li>
        <li>
          <strong>Family Coverage:</strong> Includes spouse, children, and
          dependent parents.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Claim Process
      </h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>
          Inform the HR or insurance coordinator before or at the time of
          hospitalization.
        </li>
        <li>
          Submit required documents: claim form, medical reports, bills,
          discharge summary, etc.
        </li>
        <li>
          The TPA (Third Party Administrator) will process and settle the claim.
        </li>
      </ol>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Exclusions
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Cosmetic or aesthetic treatments.</li>
        <li>Pre-existing conditions in the first year unless otherwise stated.</li>
        <li>Injuries from substance abuse or self-harm.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Premium & Coverage Limit
      </h2>
      <p className="text-gray-700">
        The company pays the premium for basic coverage. Additional voluntary
        top-up options are available at employee cost.
      </p>

      <p className="text-gray-600 mt-6 italic">
        For claim assistance or more information, contact the HR or insurance
        helpdesk.
      </p>
    </div>
  );

      // ---------------- POLICY 4 ----------------
      case "policy4":
       return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg "
    >
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        WORK FROM HOME POLICY
      </h2>

      <p className="text-gray-700 mb-4">
        Our Work From Home Policy ensures flexibility and continued productivity while maintaining team collaboration and accountability.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Eligibility
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Employees with roles that can be performed remotely.</li>
        <li>Must have completed at least 3 months in the company.</li>
        <li>Manager approval is mandatory before starting remote work.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Guidelines
      </h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>Maintain regular working hours unless approved otherwise.</li>
        <li>Be reachable during work hours through official communication tools.</li>
        <li>Attend all scheduled virtual meetings and team check-ins.</li>
      </ol>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Tools & Security
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use company-approved devices and secure VPN for access.</li>
        <li>Do not share confidential company data on personal devices.</li>
        <li>Report any data breach or issue to IT immediately.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Performance & Monitoring
      </h2>
      <p className="text-gray-700">
        Regular performance reviews will include work-from-home contributions. Productivity, communication, and timely task completion are key evaluation metrics.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Important Notes
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>WFH is a privilege, not an entitlement, and can be revoked.</li>
        <li>Employees must ensure a quiet and disturbance-free workspace.</li>
        <li>All policies remain applicable, including code of conduct.</li>
      </ul>

      <p className="text-gray-600 mt-6 italic">
        For any clarifications, please contact the HR department.
      </p>
    </div>
  );

      // ---------------- POLICY 5 ----------------
      case "policy5":
       return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        EMPLOYEE CONDUCT POLICY
      </h2>

      <p className="text-gray-700 mb-4">
        Our Employee Conduct Policy outlines the expected behavior, ethics, and professionalism that all employees must maintain within the organization.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        General Behavior
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Employees must act with integrity, honesty, and respect toward colleagues, clients, and management.</li>
        <li>Discrimination, harassment, or abusive behavior of any kind is strictly prohibited.</li>
        <li>Workplace conflicts should be resolved constructively or reported to HR.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Attendance & Punctuality
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Employees are expected to adhere to their work schedule and report on time.</li>
        <li>Chronic tardiness or unapproved absences may lead to disciplinary action.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Use of Company Resources
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Company property must be used responsibly and only for official purposes.</li>
        <li>Unauthorized access or sharing of confidential data is prohibited.</li>
        <li>Misuse of systems, including the internet or email, may result in penalties.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Dress Code
      </h2>
      <p className="text-gray-700">
        Employees should dress appropriately according to their role and company guidelines. Attire must reflect professionalism and cleanliness.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Disciplinary Actions
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Violation of this policy may result in verbal/written warnings, suspension, or termination.</li>
        <li>All cases will be investigated fairly before any disciplinary decision is made.</li>
      </ul>

      <p className="text-gray-600 mt-6 italic">
        For questions or reports related to employee conduct, please reach out to the HR department.
      </p>
    </div>
  );

      // ---------------- POLICY 6 ----------------
      case "policy6":
        return (
    <div
      ref={sectionRef}
      className="p-8 max-w-5xl mx-auto bg-white rounded-lg "
    >
      <h2 className="text-2xl font-bold mb-8 -ml-10 relative inline-block text-gray-700">
        <span
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-[#018ABE] w-full"
        ></span>
        OVERTIME POLICY
      </h2>

      <p className="text-gray-700 mb-4">
        Our Overtime Policy ensures that employees are fairly compensated for
        any additional work beyond standard working hours, while maintaining
        efficiency and workforce balance.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Eligibility
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Applies to non-exempt employees as per labor regulations.</li>
        <li>Must have prior approval from a supervisor or manager.</li>
        <li>Overtime is calculated after 8 working hours per day or 40 per week.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Compensation
      </h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>Overtime is paid at 1.5x the regular hourly rate.</li>
        <li>Public holiday or weekend work may qualify for 2x pay if approved.</li>
        <li>Payout is processed monthly along with regular salary.</li>
      </ol>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Approval & Tracking
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Use the official timesheet or HR system to log extra hours.</li>
        <li>Supervisors must review and verify entries weekly.</li>
        <li>Unauthorized overtime will not be compensated.</li>
      </ul>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Limitations
      </h2>
      <p className="text-gray-700">
        Excessive overtime is discouraged to ensure employee well-being.
        Continuous overtime beyond two weeks requires HR and management review.
      </p>

      <h2 className="text-xl font-semibold text-[#018ABE] mt-6 mb-2">
        Important Notes
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>All overtime must be accurately recorded and approved.</li>
        <li>Company reserves the right to adjust or deny claims if policy is not followed.</li>
        <li>Frequent overtime may indicate need for workload review.</li>
      </ul>

      <p className="text-gray-600 mt-6 italic">
        For any clarifications, please contact the HR department.
      </p>
    </div>
  );
      default:
        return <p>No details available</p>;
    }
  };

  return <div className="max-w-5xl mx-auto p-6">{renderPolicyDetail()}</div>;
}
