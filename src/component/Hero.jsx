import React from 'react';
import { Play, ArrowRight, Calendar, CheckCircle, Clock, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between py-20">
                    {/* Left Side - Text Content */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Stay on Track.
                            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Crush Your Tasks.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Organize, prioritize, and complete tasks with ease. Transform your productivity
                            with intelligent task management that adapts to your workflow.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                                <span>Start for Free</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-200">
                                <Play className="w-5 h-5" />
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="lg:w-1/2 lg:pl-12">
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Today's Tasks</h3>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-5 h-5 text-purple-600" />
                                        <span className="text-sm text-gray-500">Dec 28, 2024</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900 line-through">Review project proposal</p>
                                            <p className="text-sm text-gray-500">Completed 2 hours ago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                                        <Clock className="w-5 h-5 text-blue-500" />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">Team standup meeting</p>
                                            <p className="text-sm text-gray-500">Due in 1 hour</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                                        <Users className="w-5 h-5 text-purple-500" />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">Update client dashboard</p>
                                            <p className="text-sm text-gray-500">Assigned to Sarah</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">8</div>
                                    <div className="text-xs">Completed</div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">3</div>
                                    <div className="text-xs">In Progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;