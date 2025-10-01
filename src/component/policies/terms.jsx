import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using our Task Manager platform. Your use of our services constitutes acceptance of these terms.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
                            These Terms and Conditions ("Terms") govern your use of the Task Manager website ("Website" or "Platform") owned and operated by TaskManager Technologies. By accessing or using this Website, you agree to comply with and be legally bound by these Terms.
                        </p>

                        {/* Payment Gateway Transparency Notice */}
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-8">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-amber-800 mb-2">Payment Gateway Transparency Notice</h3>
                                    <p className="text-amber-700 text-sm leading-relaxed">
                                        <strong>Important:</strong> All payments are processed through our secure payment gateway partners - RazorpayX and Zaakpay (by Mobikwik). Please note that payment gateway charges, processing fees, transaction fees, convenience fees, and applicable taxes as determined by RazorpayX and/or Zaakpay will be added to your subscription amount and will be borne by the user. These charges are separate from our subscription fees and are subject to the respective payment gateway's current fee structure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Acceptance of Terms",
                                    content: "By registering on or using the Website, you confirm your acceptance of these Terms, our Privacy Policy, and any applicable subscription policies."
                                },
                                {
                                    title: "Subscription and Payment",
                                    content: "Companies must subscribe to one of the available plans via our integrated payment gateways - RazorpayX and Zaakpay (by Mobikwik). Access to premium features is subject to successful payment. All payment gateway charges, processing fees, convenience fees, and applicable taxes will be added to the subscription amount and borne by the user."
                                },
                                {
                                    title: "Payment Gateway Charges",
                                    content: "Users acknowledge that payment processing fees charged by RazorpayX and/or Zaakpay (including but not limited to transaction fees, convenience fees, payment method charges, currency conversion charges, and applicable taxes) will be added to the subscription amount. These charges are determined by RazorpayX and Zaakpay's current fee structures and are subject to change as per their respective policies."
                                },
                                {
                                    title: "Admin Responsibilities",
                                    content: "Designated Admins are accountable for the accuracy and completeness of employee data and relevant document uploads on the system."
                                },
                                {
                                    title: "Salary Disbursements",
                                    content: "All salary-related transactions must be processed through RazorpayX and/or Zaakpay as configured in the platform. Any additional charges for salary disbursements will be as per RazorpayX and Zaakpay's current fee structures and will be borne by the user."
                                },
                                {
                                    title: "Prohibited Conduct",
                                    content: "You agree not to misuse the Website, including but not limited to unauthorized access, tampering with data, or violating applicable laws. We reserve the right to suspend or terminate accounts that engage in such activities."
                                },
                                {
                                    title: "Account Security",
                                    content: "Users are responsible for safeguarding login credentials and must immediately notify us of any unauthorized activity."
                                },
                                {
                                    title: "Data Ownership",
                                    content: "Companies retain ownership of their own uploaded data. However, by using our platform, you grant us a non-exclusive license to process such data for system functionality and performance."
                                },
                                {
                                    title: "Service Availability",
                                    content: "While we strive to maintain continuous access, we do not guarantee uninterrupted service. Scheduled maintenance or unexpected downtimes may occur."
                                },
                                {
                                    title: "Refund Policy",
                                    content: "Subscription fees are non-refundable. However, payment gateway charges may be subject to RazorpayX and Zaakpay's respective refund policies in case of failed transactions or technical errors. Refund processing times and policies may vary between RazorpayX and Zaakpay, and users will be informed of the applicable policy based on the payment method used."
                                },
                                {
                                    title: "Changes to Terms",
                                    content: "We reserve the right to update these Terms at any time. Continued use of the Website after updates constitutes your acceptance of the revised Terms."
                                },
                                {
                                    title: "Governing Law",
                                    content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra."
                                }
                            ].map((term, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-200 hover:border-blue-200">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                {term.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {term.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Questions or Concerns?</h3>
                                <p className="text-blue-100 mb-6 text-lg">
                                    If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
                                </p>
                                <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/30 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a 
                                        href="mailto:trackertask33@gmail.com" 
                                        className="font-medium hover:underline"
                                    >
                                        trackertask33@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                            <p className="text-gray-500 text-sm">
                                Last updated: {new Date().toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}