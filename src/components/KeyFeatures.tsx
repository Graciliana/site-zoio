import React from "react";
import { FaEye, FaHeartbeat, FaCloud, FaLeaf } from "react-icons/fa"; // Exemplos de ícones

export const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: "Automated Fundus Exam Analysis",
      description: "AI-driven analysis for precise and efficient diagnostics.",
      icon: <FaEye className="text-white text-2xl" />, // Ícone de olho
    },
    {
      title: "Public Health Support AI",
      description: "Tools to aid public health initiatives in eye care.",
      icon: <FaHeartbeat className="text-white text-2xl" />, // Ícone de coração
    },
    {
      title: "SaaS Platform for Healthcare Providers",
      description: "Cloud-based solutions tailored to your needs.",
      icon: <FaCloud className="text-white text-2xl" />, // Ícone de nuvem
    },
    {
      title: "Open Innovation and Sustainability Focus",
      description: "Committed to ethical practices and innovation.",
      icon: <FaLeaf className="text-white text-2xl" />, // Ícone de folha
    },
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
              {feature.icon} {/* Adicionando o ícone */}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
