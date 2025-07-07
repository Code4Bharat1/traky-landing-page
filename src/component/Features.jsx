import React from 'react';
import { CheckSquare, Users, Bell, BarChart, Zap, Shield, Calendar, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Smart Task Lists",
      description: "Organize tasks with intelligent categorization and priority management that adapts to your workflow.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time updates, comments, and shared project workspaces.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Deadline Reminders",
      description: "Never miss important deadlines with smart notifications and customizable reminder settings.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Track your productivity with detailed analytics and insights to optimize your workflow.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Suggestions",
      description: "Get intelligent task suggestions and productivity tips powered by advanced AI algorithms.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy-first design principles.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Integration",
      description: "Sync with your favorite calendar apps and manage tasks alongside your schedule.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description: "Set and track long-term goals with milestone tracking and progress visualization.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to stay
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              organized and productive
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your workflow and boost your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;