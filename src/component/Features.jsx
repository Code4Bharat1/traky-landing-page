"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Users,
  Bell,
  BarChart,
  Zap,
  Shield,
  Calendar,
  Target,
} from "lucide-react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null); // for mobile tap

  const toggleFlip = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Smart Task Lists",
      description:
        "Organize tasks with intelligent categorization and priority management that adapts to your workflow.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time updates, comments, and shared project workspaces.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Deadline Reminders",
      description:
        "Never miss important deadlines with smart notifications and customizable reminder settings.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Insights",
      description:
        "Track your productivity with detailed analytics and insights to optimize your workflow.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Suggestions",
      description:
        "Get intelligent task suggestions and productivity tips powered by advanced AI algorithms.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and privacy-first design principles.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Integration",
      description:
        "Sync with your favorite calendar apps and manage tasks alongside your schedule.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description:
        "Set and track long-term goals with milestone tracking and progress visualization.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight md:leading-snug"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Everything you need to stay
            <span className="block bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent">
              organized and productive
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Powerful features designed to streamline your workflow and boost
            your productivity
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="[perspective:1000px] w-full h-[300px] cursor-pointer group"
              onClick={() => toggleFlip(index)} // tap for mobile
            >
              <div
                className={`relative w-full h-full duration-700 [transform-style:preserve-3d]
                  ${
                    activeIndex === index
                      ? "[transform:rotateY(180deg)]" // tap on mobile
                      : ""
                  }
                  group-hover:[transform:rotateY(180deg)] // hover on desktop
                `}
              >
                {/* Front side */}
                <div className="absolute inset-0 backface-hidden p-8 bg-white rounded-2xl shadow-xl shadow-gray-300 border border-gray-100 flex flex-col justify-center items-center transition-shadow duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Back side */}
                <div
                  className={`absolute inset-0 [transform:rotateY(180deg)] backface-hidden p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-white bg-gradient-to-br ${feature.color}`}
                >
                  <p className="text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
