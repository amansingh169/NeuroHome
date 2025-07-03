import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  BedDouble,
  Lamp,
  ThermometerSun,
  Fan,
  Music,
  Sun,
  Moon,
  PartyPopper,
  SlidersHorizontal,
  Speaker,
  MoveHorizontal,
} from "lucide-react";
const getFanGlowColor = (speed) => {
  switch (speed) {
    case 1: return "#3b82f6"; // blue-500
    case 2: return "#0ea5e9"; // sky-500
    case 3: return "#eab308"; // yellow-500
    case 4: return "#f97316"; // orange-500
    case 5: return "#ef4444"; // red-500
    default: return "#3b82f6";
  }
};

const getVolumeGlowColor = (volume) => {
  if (volume <= 20) return "#22c55e";     // green
  if (volume <= 40) return "#06b6d4";     // cyan
  if (volume <= 60) return "#eab308";     // yellow
  if (volume <= 80) return "#f97316";     // orange
  return "#ef4444";                       // red
};

const Bedroom = () => {
  const [lampOn, setLampOn] = useState(true);
  const [acOn, setAcOn] = useState(false);
  const [fanOn, setFanOn] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(3);
  const [curtainsOpen, setCurtainsOpen] = useState(true);
  const [ambienceOn, setAmbienceOn] = useState(false);
  const [volume, setVolume] = useState(50);
  const [selectedScene, setSelectedScene] = useState("Sleep");
  const [alexa, setAlexaon] = useState(false);

  const scenes = [
    { name: "Reading", icon: <Sun className="w-4 h-4" />, color: "#00d9ff" },
    { name: "Sleep", icon: <Moon className="w-4 h-4" />, color: "#b49eff" },
    { name: "Party", icon: <PartyPopper className="w-4 h-4" />, color: "#ff4a9d" },
  ];
const fanColor = getFanGlowColor(fanSpeed);
const volumeColor = getVolumeGlowColor(volume);

  return (
    <div
      className="min-h-screen px-6 py-10 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color-accent)",
        fontSize: "var(--fs-base)",
      }}
    >
      <h1
        className="text-center font-bold mb-10"
        style={{
          fontSize: "var(--fs-xl)",
          fontFamily: "var(--font-heading)",
          color: "var(--text-color-accent)",
          textShadow: "0 0 10px var(--accent-color)",
          background: "var(--card-bg)",
          rounded: "2xl",
        }}
      >
        LivingRoom Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <SmartCard
          title="Air Conditioner"
          icon={<ThermometerSun className="w-6 h-6 text-cyan-400" />}
          status={acOn ? "Cooling" : "Off"}
          checked={acOn}
          onToggle={setAcOn}
          glowColor="#22d3ee"
        />
        
        <SmartCard
          title="Ventilation"
          icon={<Lamp className="w-6 h-6 text-yellow-400" />}
          status={lampOn ? "On" : "Off"}
          checked={lampOn}
          onToggle={setLampOn}
          glowColor="#facc15"
        />

        <Card
  className="rounded-2xl backdrop-blur-md transition-shadow duration-300"
  style={{
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color-accent)",
    boxShadow: fanOn ? `0 0 15px ${fanColor}` : "none",
  }}
>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-blue-400">
      <Fan className="w-6 h-6" />
      Ceiling Fan
    </CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <span className="text-sm">{fanOn ? `Speed ${fanSpeed}` : "Off"}</span>
      <Switch
        checked={fanOn}
        onCheckedChange={setFanOn}
        style={{ backgroundColor: fanOn ? "cyan" : undefined }}
      />
    </div>

    {fanOn && (
      <input
        type="range"
        min={1}
        max={5}
        value={fanSpeed}
        onChange={(e) => setFanSpeed(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: fanColor }}
      />
    )}
  </CardContent>
</Card>


        <SmartCard
          title="Room  Lights"
          icon={<SlidersHorizontal className="w-6 h-6 text-pink-400" />}
          status={ambienceOn ? "On" : "Off"}
          checked={ambienceOn}
          onToggle={setAmbienceOn}
          glowColor="#ec4899"
        />

        <SmartCard
          title="Curtains"
          icon={<MoveHorizontal className="w-6 h-6 text-lime-400" />}
          status={curtainsOpen ? "Open" : "Closed"}
          checked={curtainsOpen}
          onToggle={setCurtainsOpen}
          glowColor="#84cc16"
        />

        <Card className="rounded-2xl backdrop-blur-md" style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)"
        }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-rose-400">
              <ThermometerSun className="w-6 h-6" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold" style={{ color: "var(--accent-color)" }}>
              23°C – Ideal for sleep
            </p>
            <p className="text-sm" style={{ color: "var(--text-color)" }}>
              Humidity: 36%
            </p>
          </CardContent>
        </Card>

<Card
  className="rounded-2xl backdrop-blur-md transition-shadow duration-300"
  style={{
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color-accent)",
    boxShadow: `0 0 15px ${volumeColor}`,
  }}
>
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-fuchsia-400">
      <Music className="w-6 h-6" />
      Music Player
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    <div className="text-sm">
      Now Playing: <strong>Lo-Fi Vibes</strong>
    </div>
    <div className="text-xs text-[var(--text-color)]">
      Bedroom Speakers <Speaker className="inline-block w-4 h-4 ml-1" />
    </div>

    <input
      type="range"
      min={0}
      max={100}
      step={1}
      value={volume}
      onChange={(e) => setVolume(Number(e.target.value))}
      className="w-full"
      style={{ accentColor: volumeColor }}
    />

    <div className="text-xs text-right text-[var(--text-color)]">
      Volume: {volume}%
    </div>
  </CardContent>
</Card>

        <Card className="rounded-2xl backdrop-blur-md" style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)"
        }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-emerald-400">
              <SlidersHorizontal className="w-6 h-6" />
              Scene
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {scenes.map((scene) => (
              <GlowButton
                key={scene.name}
                active={selectedScene === scene.name}
                label={scene.name}
                icon={scene.icon}
                onClick={() => setSelectedScene(scene.name)}
                activeColor={scene.color}
              />
            ))}
          </CardContent>
          
        </Card>
        <SmartCard
        title="Alexa"
          icon={<SlidersHorizontal className="w-6 h-6 text-pink-400" />}
          status={alexa ? "On" : "Off"}
          checked={alexa}
          onToggle={setAlexaon}
          glowColor="#6600CC"
        />
        
        
      </div>
    </div>
  );
};



const SmartCard = ({ title, icon, status, checked, onToggle, glowColor }) => (
  <Card
    className="rounded-2xl backdrop-blur-md transition-shadow duration-300"
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border-color)",
      color: "var(--text-color-accent)",
      boxShadow: checked ? `0 0 15px ${glowColor}` : "none",
    }}
  >
    <CardHeader>
      <CardTitle className="flex items-center gap-3">{icon} {title}</CardTitle>
    </CardHeader>
    <CardContent className="flex justify-between items-center">
      <span style={{ color: checked ? "var(--text-color-accent)" : "var(--text-color)" }}>
        {status}
      </span>
      <Switch
        checked={checked}
        onCheckedChange={onToggle}
        style={{ backgroundColor: checked ? glowColor : undefined }}
      />
    </CardContent>
  </Card>
);

const GlowButton = ({ active, icon, label, onClick, activeColor }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 w-full px-4 py-2 rounded-xl font-medium text-sm transition
        ${
          active
            ? "text-[var(--contrast-zero)]"
            : "text-[var(--text-color-accent)] hover:bg-[var(--accent-color-2)]"
        }
      `}
      style={{
        backgroundColor: active ? activeColor : "var(--card-bg)",
        border: "1px solid var(--border-color)",
        backdropFilter: "blur(6px)",
        boxShadow: active ? `0 0 10px ${activeColor}` : "none",
      }}
    >
      {icon}
      {label}
    </button>
  );
};

export default Bedroom;
