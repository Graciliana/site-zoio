import React from "react";
import { FaEye, FaHeartbeat, FaCloud, FaLeaf } from "react-icons/fa"; // Exemplos de ícones

export const GetInvolved: React.FC = () => {
  const features = [
    {
      
      description: "Partnership Opportunities: Invitation for healthcare providers and NGOs to collaborate.",
      icon: <FaEye className="text-white text-2xl" />, // Ícone de olho
    },
    {
      
      description: "Beta Testing Program: Option to join as a beta tester and help refine the platform.",
      icon: <FaHeartbeat className="text-white text-2xl" />, // Ícone de coração
    },
    {
      
      description: "Support the future of eye care by investing in our technology.",
      icon: <FaCloud className="text-white text-2xl" />, // Ícone de nuvem
    },
    {
      
      description: "Become a ZOIO Community Ambassador and help expand access to eye care through local outreach programs.",
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
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
       <div className="flex justify-center items-center space-y-4 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                  Get in touch!
              </a>
             
            </div>
    </div>
  );
};
