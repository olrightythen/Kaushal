import React from 'react';
import { Shield, Clock, ThumbsUp, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'All workers are thoroughly vetted and background-checked for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Get connected with available professionals within minutes, not days.'
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guaranteed',
    description: 'All work is backed by our satisfaction guarantee and insurance coverage.'
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'Clear upfront pricing with no hidden fees or surprises.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kaushal?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}