import React from "react";

export const AboutZoio: React.FC = () => {
  const links = [
    "Journey with Imagine Cup 2024-2025",
    "Founders",
    "Partners",
    "ZOIO Values",
    "Green Software",
    "Blog",
  ];

  return (
    <div className="">
      {/* Título */}
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl xl:text-5xl dark:text-white">
          About ZOIO
        </h2>
      </div>

      {/* Botões */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {links.map((link, index) => (
          <button
            key={index}
            className="w-full px-6 py-4 text-lg font-medium text-center text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};
