import React from 'react';

const features = [
  {
    title: "Electrical Work",
    description: "Professional electrical services for your home or business",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Plumbing Services",
    description: "Expert plumbing services for your home or business",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Carpentry Work",
    description: "Quality carpentry services for your home or business",
    image:
      "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Painting Services",
    description: "Professional painting services for your home or business",
    image:
      "https://media.istockphoto.com/id/938085736/photo/workamn-painting-wall-indoors.jpg?s=2048x2048&w=is&k=20&c=MwGVWk1mw-9h2XWJIXiPZ5Ugp3fye36w_MolVsjpdns=",
  },
];

export default function Features() {
  return (
    <section id='services' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}