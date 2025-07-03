import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  Fan,
  Droplets,
  AlertTriangle,
  SlidersHorizontal,
  Lightbulb,
  Sun,
  Moon,
  ShowerHead,
  MonitorSmartphone,
  Flame,
} from "lucide-react";

const getFanGlowColor = (speed) => {
  switch (speed) {
    case 1: return "#3b82f6";
    case 2: return "#0ea5e9";
    case 3: return "#eab308";
    case 4: return "#f97316";
    case 5: return "#ef4444";
    default: return "#3b82f6";
  }
};

const Bathroom = () => {
  const [lightsOn, setLightsOn] = useState(true);
  const [exhaustOn, setExhaustOn] = useState(true);
  const [exhaustSpeed, setExhaustSpeed] = useState(3);
  const [geyserOn, setGeyserOn] = useState(false);
  const [mirrorOn, setMirrorOn] = useState(false);
  const [leakDetected, setLeakDetected] = useState(false);
  const [humidityHigh, setHumidityHigh] = useState(false);
  const [scene, setScene] = useState("Relax");
  const [towelWarmerOn, setTowelWarmerOn] = useState(false);
const [floorHeatingOn, setFloorHeatingOn] = useState(false);


  const scenes = [
    { name: "Relax", icon: <Sun className="w-4 h-4" />, color: "#22d3ee" },
    { name: "Shower", icon: <ShowerHead className="w-4 h-4" />, color: "#38bdf8" },
    { name: "Night", icon: <Moon className="w-4 h-4" />, color: "#c084fc" },
  ];

  const fanColor = getFanGlowColor(exhaustSpeed);

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color-accent)",
        fontSize: "var(--fs-base)",
      }}
    >
      <h1
        className="text-center font-bold mb-10"
        style={{
          background: "var(--card-bg)",
          fontSize: "var(--fs-xl)",
          color: "var(--accent-color)",
          textShadow: "0 0 10px var(--accent-color)",
        }}
      >
        Bathroom Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <SmartCard
          title="Bathroom Lights"
          icon={<Lightbulb className="w-6 h-6 text-yellow-400" />}
          status={lightsOn ? "On" : "Off"}
          checked={lightsOn}
          onToggle={setLightsOn}
          glowColor="#facc15"
        />

        <Card
          className="rounded-2xl backdrop-blur-md transition-shadow duration-300"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            color: "var(--text-color-accent)",
            boxShadow: exhaustOn ? `0 0 15px ${fanColor}` : "none",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-400">
              <Fan className="w-6 h-6" />
              Exhaust Fan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">{exhaustOn ? `Speed ${exhaustSpeed}` : "Off"}</span>
              <Switch
                checked={exhaustOn}
                onCheckedChange={setExhaustOn}
                style={{ backgroundColor: exhaustOn ? fanColor : undefined }}
              />
            </div>
            {exhaustOn && (
              <input
                type="range"
                min={1}
                max={5}
                value={exhaustSpeed}
                onChange={(e) => setExhaustSpeed(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: fanColor }}
              />
            )}
          </CardContent>
        </Card>

        <SmartCard
          title="Geyser"
          icon={<Flame className="w-6 h-6 text-orange-500" />}
          status={geyserOn ? "Heating" : "Off"}
          checked={geyserOn}
          onToggle={setGeyserOn}
          glowColor="#fb923c"
        />

        <SmartCard
          title="Smart Mirror"
          icon={<MonitorSmartphone className="w-6 h-6 text-sky-400" />}
          status={mirrorOn ? "On" : "Off"}
          checked={mirrorOn}
          onToggle={setMirrorOn}
          glowColor="#38bdf8"
        />

        <SmartCard
          title="Water Leak Detector"
          icon={<Droplets className="w-6 h-6 text-blue-400" />}
          status={leakDetected ? "Leak Found" : "Dry"}
          checked={leakDetected}
          onToggle={setLeakDetected}
          glowColor="#3b82f6"
        />

        <SmartCard
          title="Humidity Sensor"
          icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
          status={humidityHigh ? "High Humidity!" : "Normal"}
          checked={humidityHigh}
          onToggle={setHumidityHigh}
          glowColor="#ef4444"
        />

        <Card
          className="rounded-2xl backdrop-blur-md"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-emerald-400">
              <SlidersHorizontal className="w-6 h-6" />
              Bathroom Scene
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {scenes.map((s) => (
              <GlowButton
                key={s.name}
                active={scene === s.name}
                label={s.name}
                icon={s.icon}
                onClick={() => setScene(s.name)}
                activeColor={s.color}
              />
            ))}
          </CardContent>
        </Card>

        <SmartCard
  title="Towel Warmer"
  icon={<Flame className="w-6 h-6 text-red-400" />}
  status={towelWarmerOn ? "Heating" : "Off"}
  checked={towelWarmerOn}
  onToggle={setTowelWarmerOn}
  glowColor="#ef4444"
/>

<SmartCard
  title="Floor Heating"
  icon={<Droplets className="w-6 h-6 text-yellow-400" />}
  status={floorHeatingOn ? "On" : "Off"}
  checked={floorHeatingOn}
  onToggle={setFloorHeatingOn}
  glowColor="#facc15"
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

export default Bathroom;
