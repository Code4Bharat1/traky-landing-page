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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFlip = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Smart Task Lists",
      description:
        "Organize tasks with intelligent categorization and priority management that adapts to your workflow.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time updates, comments, and shared project workspaces.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Deadline Reminders",
      description:
        "Never miss important deadlines with smart notifications and customizable reminder settings.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Insights",
      description:
        "Track your productivity with detailed analytics and insights to optimize your workflow.",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Suggestions",
      description:
        "Get intelligent task suggestions and productivity tips powered by advanced AI algorithms.",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and privacy-first design principles.",
      color: "from-teal-400 to-blue-400",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Integration",
      description:
        "Sync with your favorite calendar apps and manage tasks alongside your schedule.",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description:
        "Set and track long-term goals with milestone tracking and progress visualization.",
      color: "from-indigo-400 to-blue-400",
    },
  ];

  return (

       <section
      id="features"
      className="relative py-20 overflow-hidden"
    >
      {/* ✅ Background gradient only */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-blue-200 to-white"></div>
      </div>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="block bg-gradient-to-r from-blue-600 to-blue-950 bg-clip-text text-transparent">
              organized and productive
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
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
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`relative w-full h-full duration-700 [transform-style:preserve-3d]
                  ${activeIndex === index ? "[transform:rotateY(180deg)]" : ""}
                  group-hover:[transform:rotateY(180deg)]`}
              >
                {/* Front side */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl shadow-xl">
                  <div
                    className={`relative w-full h-full p-8 rounded-2xl flex flex-col justify-center items-center 
                      bg-gradient-to-br ${feature.color} shadow-lg shadow-${feature.color.split(" ")[0]}-200/50`}
                  >
                    {/* Light overlay */}
                    <div className="absolute inset-0 bg-white bg-opacity-30 rounded-2xl"></div>

                    <div className="relative z-10 flex flex-col justify-center items-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Back side */}
                <div
                  className={`absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-white bg-gradient-to-br ${feature.color}`}
                >
                  <p className="text-center leading-relaxed">{feature.description}</p>
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
