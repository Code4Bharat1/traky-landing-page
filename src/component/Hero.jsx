"use client";
import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

// Bubble Component
const Bubble = ({ size, delay, duration, initialX, initialY }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(200,100,255,0.4) 40%, rgba(100,200,255,0.4) 65%, rgba(255,100,200,0.35) 80%, rgba(100,100,255,0.3) 100%)",
        boxShadow: "0 0 35px rgba(120,80,200,0.6), 0 0 60px rgba(80,180,255,0.4)",
        opacity: 0.9,
      }}
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
};

const Hero = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }).map(() => ({
      size: 80 + Math.random() * 120,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
      x: Math.random() * window.innerWidth, // unique random start X
      y: Math.random() * window.innerHeight, // unique random start Y
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 overflow-hidden">
      
      {/* Floating Bubbles */}
      {bubbles.map((b, i) => (
        <Bubble
          key={i}
          size={b.size}
          duration={b.duration}
          delay={b.delay}
          initialX={b.x}
          initialY={b.y}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-20">
        {/* Left Text */}
        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stay on Track.
            <span className="block bg-gradient-to-r from-blue-600 to-blue-950 bg-clip-text text-transparent">
              Crush Your Tasks.
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Organize, prioritize, and complete tasks with ease. Transform your productivity
            with intelligent task management that adapts to your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-950 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Start for Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-200">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Right Task Card */}
        <motion.div
          className="lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Today's Tasks</h3>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-500">Dec 28, 2024</span>
                </div>
              </div>

              {/* Task List */}
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

            {/* Floating Counters */}
            <motion.div
              className="absolute -top-12 -right-4 bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-4 rounded-2xl shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs">Completed</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 rounded-2xl shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs">In Progress</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
