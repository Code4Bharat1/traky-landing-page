import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Ready to take control
                        <span className="block">of your tasks?</span>
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                        Join thousands of professionals who have transformed their productivity with Traky.
                        Start your free trial today and experience the difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                            <span>Start Tracking Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                            Schedule a Demo
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-100">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;