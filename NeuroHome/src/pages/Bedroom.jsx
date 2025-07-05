import { useState } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils"; // Ensure this utility is present

import {
  Lightbulb,
  Fan,
  Thermometer,
  Volume2,
  Tv,
  Blinds,
  Book,
  Shield,
  Moon,
  Clock,
  Speaker,
  Power,
  Zap,
} from "lucide-react";

// Helper functions
const getFanGlowColor = (speed) => {
  switch (speed) {
    case 1:
      return "#3b82f6";
    case 2:
      return "#0ea5e9";
    case 3:
      return "#eab308";
    case 4:
      return "#f97316";
    case 5:
      return "#ef4444";
    default:
      return "#3b82f6";
  }
};

const getVolumeGlowColor = (volume) => {
  if (volume <= 20) return "#22c55e";
  if (volume <= 40) return "#06b6d4";
  if (volume <= 60) return "#eab308";
  if (volume <= 80) return "#f97316";
  return "#ef4444";
};

const Bedroom = () => {
  const [activeScene, setActiveScene] = useState("Bright");
  const [fanSpeed, setFanSpeed] = useState(3);
  const [volume, setVolume] = useState(60);

  const lightingScenes = [
    { name: "Bright", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Relax", icon: <Moon className="w-4 h-4" /> },
    { name: "Reading", icon: <Book className="w-4 h-4" /> },
  ];

  const bedroomDevices = [
    { name: "Smart TV", icon: <Tv className="w-4 h-4" /> },
    { name: "Sound System", icon: <Volume2 className="w-4 h-4" /> },
    { name: "Air Purifier", icon: <Fan className="w-4 h-4" /> },
  ];

  const quickActions = [
    { name: "Good Morning", icon: <Zap className="w-4 h-4" /> },
    { name: "Good Night", icon: <Moon className="w-4 h-4" /> },
    { name: "Privacy On", icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-primary rounded-3xl border border-stone-400 border-solid">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted">Bedroom - Thu, Jan 12</p>
        <p className="text-sm text-accent drop-shadow-md">🌡️ 21°C / 💧 55%</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Main Lighting */}
        <Card className="col-span-2 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Main Lighting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-semibold text-primary"></span>
              <Button variant="default" className="w-24">
                <Power className="w-4 h-4 mr-2" /> On/Off
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-primary">Dimmer</label>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={75}
                className="w-full accent-[var(--accent-color)]"
              />
              <label className="text-xs text-primary">Color Temp</label>
              <input
                type="range"
                min={1000}
                max={6500}
                defaultValue={3000}
                className="w-full accent-[var(--accent-color)]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Climate Control */}
        <Card className="col-span-2 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Climate Control</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-4xl font-medium text-primary">21°C</p>
              <p className="text-xs">Current</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-medium text-primary">23°C</p>
              <p className="text-xs">Target</p>
              <Button variant="secondary" size="sm" className="mt-2">
                <Thermometer className="w-3 h-3 mr-1" /> Adjust
              </Button>
            </div>
            <div className="text-center">
              <p className="text-2xl font-medium text-primary">55%</p>
              <p className="text-xs">Humidity</p>
            </div>
          </CardContent>
        </Card>

        {/* Lighting Scenes */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Lighting Scenes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {lightingScenes.map((scene, idx) => (
              <Button
                key={idx}
                variant={scene.name === activeScene ? "default" : "ghost"}
                onClick={() => setActiveScene(scene.name)}
                className={cn(
                  "w-full flex justify-start gap-2 transition",
                  scene.name === activeScene && "ring-2 ring-accent"
                )}
              >
                {scene.icon}
                {scene.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Window Blinds */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Window Blinds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="default" className="w-full">
              <Blinds className="w-4 h-4 mr-2" /> Open
            </Button>
            <Button variant="secondary" className="w-full">
              <Blinds className="w-4 h-4 mr-2" /> Close
            </Button>
            <Progress
              value={50}
              className="h-2 bg-secondary mt-2 transition-all duration-500"
              style={{ boxShadow: "0 0 6px var(--accent-color)" }}
            />
            <p className="text-xs text-center">50% Open</p>
          </CardContent>
        </Card>

        {/* Bedroom Devices */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bedroom Devices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {bedroomDevices.map((device, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="w-full flex justify-start gap-2 hover:bg-accent/30 transition"
              >
                {device.icon}
                {device.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="w-full flex justify-start gap-2 hover:bg-accent/30 transition"
              >
                {action.icon}
                {action.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Media Controls */}
        <Card className="col-span-2 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Media Controls</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Volume2 className="w-5 h-5 text-primary animate-pulse" />
              <Progress
                value={volume}
                className="h-2 w-3/4 bg-secondary"
                style={{ boxShadow: `0 0 10px ${getVolumeGlowColor(volume)}` }}
              />
              <span className="text-sm">{volume}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="accent-[var(--accent-color)]"
            />
            <div className="grid grid-cols-3 gap-2">
              {["Play", "Pause", "Skip"].map((label, idx) => (
                <Button
                  key={idx}
                  variant="secondary"
                  className="hover:scale-105 transition"
                >
                  {label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alarm Clock */}
        <Card className="col-span-2 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Alarm Clock</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-4xl font-semibold text-primary">07:00</p>
              <p className="text-xs">Wake Up</p>
            </div>
            <Button variant="default">
              <Clock className="w-4 h-4 mr-2" /> Set Alarm
            </Button>
            <Button variant="secondary">
              <Speaker className="w-4 h-4 mr-2" /> Snooze
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bedroom;
