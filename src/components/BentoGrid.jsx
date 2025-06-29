import React from "react";
import { FiCloud, FiZap, FiShield, FiCpu, FiBell, FiRepeat } from "react-icons/fi";

const items = [
  { title: "Cloud Sync", icon: <FiCloud />, description: "Sync your files across the cloud seamlessly." },
  { title: "Power Boost", icon: <FiZap />, description: "Experience high performance power modes." },
  { title: "Security", icon: <FiShield />, description: "Industry-leading encryption built-in." },
  { title: "Processor", icon: <FiCpu />, description: "Next-gen processing capabilities." },
  { title: "Notifications", icon: <FiBell />, description: "Stay updated in real time." },
  { title: "Automate", icon: <FiRepeat />, description: "Automate workflows with ease." }
  
];

const BentoGrid = () => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/30 text-white rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-3xl mb-4 text-accent">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BentoGrid;