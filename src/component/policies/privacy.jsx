import React from 'react';
import { Shield, Lock, Eye, CreditCard, Globe, Users, FileText, Mail, MapPin, AlertCircle } from 'lucide-react';

export default function Policies() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-8 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8" />
                            <h1 className="text-4xl font-bold">Privacy Policy</h1>
                        </div>
                        <p className="text-blue-100 text-lg">
                            Your privacy and data security are our top priorities at <strong>www.task-tracker-admin.code4bharat.com</strong>
                        </p>
                    </div>
                    
                    {/* Key Highlights */}
                    <div className="p-6 bg-gray-50 border-b">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 text-green-700">
                                <Lock className="w-5 h-5" />
                                <span className="font-medium">Data Secured</span>
                            </div>
                            <div className="flex items-center gap-3 text-blue-700">
                                <Eye className="w-5 h-5" />
                                <span className="font-medium">Full Transparency</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-700">
                                <Users className="w-5 h-5" />
                                <span className="font-medium">No Data Selling</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 space-y-8">
                        
                        {/* Introduction */}
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                This Privacy Policy governs the use of <strong>www.task-tracker-admin.code4bharat.com</strong> ("Website"). 
                                This document is an electronic record under the Information Technology Act, 2000 and rules thereunder, 
                                published in accordance with Rule 3(1) of the IT (Intermediaries Guidelines) Rules, 2011.
                            </p>
                        </div>

                        {/* Payment Gateway Information - NEW SECTION */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" />
                                        Payment Processing & Gateway Charges
                                    </h2>
                                    <div className="space-y-3 text-amber-900">
                                        <p><strong>Payment Gateway Partners:</strong> We use RazorpayX and ZaakPay (by Mobikwik) for secure payment processing.</p>
                                        <p><strong>Gateway Charges:</strong> Payment gateway charges as applicable by our partners will be borne by the user and will be clearly displayed before transaction completion.</p>
                                        <p><strong>Data Sharing:</strong> Payment data is securely shared with our payment partners only for transaction processing and compliance purposes.</p>
                                        <p><strong>Security:</strong> All payment information is processed through encrypted, PCI-DSS compliant channels. We do not store your complete card details on our servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-blue-600" />
                                1. About this Privacy Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                This Privacy Policy describes how we collect, use, disclose, and safeguard your data when you use our website. 
                                Please read it carefully to understand how your data will be handled.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-blue-600" />
                                2. Collection of Data
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                    <h3 className="font-bold text-blue-900 mb-2">2.1 What is Personal Data?</h3>
                                    <p className="text-blue-800">
                                        Personal Data includes details such as your name, email address, phone number, address, location, organization, 
                                        and identity-related information (e.g. PAN, Aadhaar, etc.).
                                    </p>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                    <h3 className="font-bold text-green-900 mb-2">2.2 What is Usage Data?</h3>
                                    <p className="text-green-800">
                                        Usage Data refers to technical and diagnostic information such as IP address, browser type/version, 
                                        device info, timestamps, pages visited, and general analytics data.
                                    </p>
                                </div>

                                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                    <h3 className="font-bold text-purple-900 mb-2">2.3 How Do We Collect Data?</h3>
                                    <p className="text-purple-800">
                                        Data is collected directly from you when entered via forms or inquiries. Additionally, cookies and analytics tools 
                                        may collect non-identifiable usage data. Personal Data is collected only when you explicitly provide it.
                                    </p>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                    <h3 className="font-bold text-orange-900 mb-2">2.4 Cookies</h3>
                                    <p className="text-orange-800">
                                        We use cookies to enhance your experience and analyze site traffic. By using our Website, you consent to the use of cookies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Users className="w-6 h-6 text-blue-600" />
                                3. Usage and Sharing of Data
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-3">3.1 How We Use Your Data</h3>
                                    <p className="text-gray-700">
                                        Data is used to improve our services, maintain security, analyze user behavior, and process payments securely.
                                    </p>
                                </div>

                                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                                    <h3 className="font-bold text-red-800 mb-3">3.2 What We Don't Do</h3>
                                    <ul className="text-red-700 space-y-1">
                                        <li>• We do not sell or rent your data</li>
                                        <li>• We do not collect sensitive financial information beyond payment processing</li>
                                        <li>• We do not share data with advertisers</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 bg-indigo-50 p-5 rounded-lg">
                                <h3 className="font-bold text-indigo-800 mb-3">3.3 Data Sharing</h3>
                                <ul className="text-indigo-700 space-y-2">
                                    <li>• With service providers for support and compliance</li>
                                    <li>• With payment gateway partners (RazorpayX, ZaakPay) for transaction processing</li>
                                    <li>• With legal authorities upon valid request</li>
                                    <li>• With internal staff for troubleshooting or administrative purposes</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Lock className="w-6 h-6 text-blue-600" />
                                4. Data Retention
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your Personal Data as long as necessary for operational, legal, and security purposes. 
                                Usage Data may be retained longer for diagnostics or legal compliance. Payment transaction data is retained 
                                as per regulatory requirements and our payment partners' policies.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-blue-600" />
                                5. Disclaimer
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Despite taking adequate security measures, we are not liable for unauthorized access by third parties 
                                due to circumstances beyond our control.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-blue-600" />
                                6. Data Deletion Requests
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                You may contact us to request deletion of your data. We will respond promptly and take appropriate action 
                                in accordance with applicable laws. Note that certain transaction records may be retained for legal and compliance purposes.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes to this Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                This Privacy Policy may be updated periodically. If major changes are made, we will notify you via email 
                                or prominently on the Website.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Mail className="w-6 h-6 text-blue-600" />
                                8. Contact Us
                            </h2>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-blue-800">
                                    If you have questions about this policy or your data, email us at: 
                                    <a className="text-blue-600 font-medium hover:underline ml-1" href="mailto:trackertask33@gmail.com">
                                        trackertask33@gmail.com
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-blue-600" />
                                9. Location Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Location data (such as punch-in/out points) may be collected via GPS or IP address to support certain features. 
                                You can manage location permissions via device settings. We do not share this with third-party sellers or aggregators.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-800 text-white p-6 rounded-2xl mt-8 text-center">
                    <p className="text-gray-300">
                        Last updated: June 2025 | This policy is compliant with Indian IT Act 2000 and Payment Gateway regulations
                    </p>
                </div>
            </div>
        </div>
    );
}