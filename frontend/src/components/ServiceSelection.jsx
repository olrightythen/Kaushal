import React from "react";
import { Paintbrush, WrenchIcon, ZapIcon, PenToolIcon, Hammer } from "lucide-react";

const services = [
  {
    id: "plumbing",
    name: "Plumbing",
    icon: WrenchIcon,
    description: "Pipe repairs, installations & maintenance",
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: ZapIcon,
    description: "Wiring, fixtures & electrical repairs",
  },
  {
    id: "carpentry",
    name: "Carpentry",
    icon: Hammer,
    description: "Woodwork, repairs & installations",
  },
  {
    id: "painting",
    name: "Painting",
    icon: Paintbrush,
    description: "Interior & exterior painting",
  },
];

export function ServiceSelection({ selectedService, onServiceChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Select a Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.id}
              onClick={() => onServiceChange(service.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedService === service.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
