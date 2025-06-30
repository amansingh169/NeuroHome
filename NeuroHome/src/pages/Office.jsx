import React from "react";
import { 
  FiHome, 
  FiSun, 
  FiCamera, 
  FiWifi, 
  FiClock,
  FiDroplet,
  FiThermometer,
  FiPower,
  FiCoffee,
  FiBook,
  FiBriefcase,
  FiHeart
} from "react-icons/fi";

const SmartHomeGrid = () => {
  const rooms = [
    { name: "Living room", icon: <FiHome /> },
    { name: "Bedroom", icon: <FiHome /> },
    { name: "Kitchen", icon: <FiHome /> },
    { name: "Office", icon: <FiHome /> },
    { name: "Bathroom", icon: <FiHome /> }
  ];

  const devices = [
    { name: "Camera", icon: <FiCamera /> },
    { name: "Robotic Vacuum", icon: <FiPower /> },
    { name: "Air Conditioning", icon: <FiThermometer /> }
  ];

  const modes = [
    { name: "Reading", icon: <FiBook /> },
    { name: "Working", icon: <FiBriefcase /> },
    { name: "Romantic", icon: <FiHeart /> }
  ];

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 max-w-6xl mx-auto">
      {/* Date and Weather */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-white/80">Thu, Jan 12</div>
        <div className="text-white/80 text-sm">Today will be cloudy. Apply SPF during the day.</div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Rooms Section */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Rooms</h3>
          <div className="space-y-2">
            {rooms.map((room, idx) => (
              <div key={idx} className="flex items-center text-white/80 hover:text-white cursor-pointer">
                <span className="mr-2">{room.icon}</span>
                {room.name}
              </div>
            ))}
          </div>
        </div>

        {/* Lighting Section */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Lighting</h3>
          <div className="flex justify-between mb-2">
            <div className="text-white/80">30%</div>
            <div className="text-white/80">80%</div>
          </div>
          <div className="h-2 bg-gray-700 rounded-full mb-4">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Devices Section */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Devices</h3>
          <div className="space-y-3">
            {devices.map((device, idx) => (
              <div key={idx} className="flex items-center text-white/80 hover:text-white cursor-pointer">
                <span className="mr-2">{device.icon}</span>
                {device.name}
              </div>
            ))}
          </div>
        </div>

        {/* Modes Section */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Modes</h3>
          <div className="space-y-3">
            {modes.map((mode, idx) => (
              <div key={idx} className="flex items-center text-white/80 hover:text-white cursor-pointer">
                <span className="mr-2">{mode.icon}</span>
                {mode.name}
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Controls */}
        <div className="col-span-2 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Temperature</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-3xl text-white">20°C</div>
              <div className="text-white/60 text-sm">Current</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white">23°C</div>
              <div className="text-white/60 text-sm">Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white">80°C</div>
              <div className="text-white/60 text-sm">Water</div>
            </div>
          </div>
        </div>

        {/* Electricity Usage */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Electricity</h3>
          <div className="text-white/80 mb-1">Month</div>
          <div className="text-2xl text-white mb-2">360kW</div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Wi-Fi Info */}
        <div className="col-span-1 bg-black/30 rounded-2xl p-4">
          <h3 className="text-white font-medium mb-3">Wi-Fi</h3>
          <div className="text-white/80 mb-1">25 M²</div>
          <div className="text-white/80 mb-1">25%</div>
          <div className="text-white/80">15 Min Loft</div>
        </div>

        {/* Action Buttons */}
        <div className="col-span-4 bg-black/30 rounded-2xl p-4">
          <div className="grid grid-cols-4 gap-4">
            <button className="bg-blue-500/80 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition">
              Go Dock
            </button>
            <button className="bg-blue-500/80 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition">
              Push
            </button>
            <button className="bg-blue-500/80 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition">
              Action
            </button>
            <button className="bg-blue-500/80 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition">
              Gosling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeGrid;