import React from 'react';
import { Target, Users, Award, Lightbulb, Heart, Globe } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Mission-Driven",
            description: "We're on a mission to help people and teams achieve more by simplifying task management and boosting productivity."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "User-Centric",
            description: "Every feature we build starts with understanding our users' needs and challenges in their daily workflow."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation First",
            description: "We leverage cutting-edge technology like AI to create intelligent solutions that adapt to how you work."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Built with Care",
            description: "We craft every detail with attention and care, ensuring a delightful experience in every interaction."
        }
    ];

    const team = [
        {
            name: "Alex Chen",
            role: "CEO & Co-founder",
            image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            bio: "Former product manager at Google with 10+ years in productivity tools."
        },
        {
            name: "Sarah Kim",
            role: "CTO & Co-founder",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            bio: "Ex-engineering lead at Microsoft, passionate about building scalable systems."
        },
        {
            name: "Marcus Johnson",
            role: "Head of Design",
            image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            bio: "Award-winning designer with experience at Apple and Airbnb."
        },
        {
            name: "Emily Rodriguez",
            role: "VP of Marketing",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            bio: "Growth marketing expert who scaled multiple SaaS products from startup to IPO."
        }
    ];

    const stats = [
        { number: "50K+", label: "Active Users" },
        { number: "1M+", label: "Tasks Completed" },
        { number: "150+", label: "Countries" },
        { number: "99.9%", label: "Uptime" }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        We're building the future of
                        <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            task management
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Founded in 2022, Traky was born from the frustration of juggling multiple task management tools
                        that were either too simple or overwhelmingly complex. We set out to create the perfect balance:
                        powerful enough for teams, simple enough for individuals.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                It started with a simple observation: most productivity tools were built by engineers,
                                for engineers. They were powerful but intimidating, feature-rich but cluttered.
                            </p>
                            <p>
                                We believed there was a better way. A tool that could harness the power of AI and
                                modern technology while maintaining the simplicity and elegance that users actually want.
                            </p>
                            <p>
                                Today, Traky is used by over 50,000 professionals across 150 countries, from solo
                                entrepreneurs to Fortune 500 companies. But we're just getting started.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center space-x-4 mb-6">
                                <Globe className="w-8 h-8 text-purple-600" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">Global Impact</h4>
                                    <p className="text-gray-600">Helping teams worldwide</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">North America</span>
                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Europe</span>
                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Asia Pacific</span>
                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The passionate people behind Traky
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
                        <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h3>
                        <p className="text-xl text-gray-600 mb-8">
                            We're always looking for talented individuals who share our passion for building
                            exceptional products. Check out our open positions.
                        </p>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;