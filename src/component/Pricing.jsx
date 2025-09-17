import React, { useState } from 'react';
import { Check, X, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Up to 5 projects",
        "Basic task management",
        "Mobile app access",
        "Email support",
        "1GB storage"
      ],
      limitations: [
        "No team collaboration",
        "No advanced analytics",
        "No AI suggestions"
      ],
      color: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Standard",
      description: "Ideal for small teams and growing businesses",
      monthlyPrice: 12,
      annualPrice: 120,
      features: [
        "Unlimited projects",
        "Team collaboration (up to 10 members)",
        "Advanced task management",
        "Calendar integration",
        "Priority support",
        "10GB storage",
        "Basic analytics",
        "Custom workflows"
      ],
      limitations: [
        "Limited AI suggestions",
        "No white-label options"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Premium",
      description: "For large teams and enterprise needs",
      monthlyPrice: 24,
      annualPrice: 240,
      features: [
        "Everything in Standard",
        "Unlimited team members",
        "Advanced AI suggestions",
        "Custom integrations",
        "White-label options",
        "Unlimited storage",
        "Advanced analytics & reporting",
        "24/7 phone support",
        "Custom onboarding",
        "API access"
      ],
      limitations: [],
      color: "from-blue-500 to-blue-500",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-snug">
  Simple, transparent
  <span className="block bg-gradient-to-r from-blue-500 to-blue-950 bg-clip-text text-transparent">
    pricing for everyone
  </span>
</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Annual
            </span>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Save 17%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-blue-200 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-950 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      ${(plan.monthlyPrice * 12).toFixed(0)} billed annually
                    </p>
                  )}
                </div>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-950 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Start Free Trial'}
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;