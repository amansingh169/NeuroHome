import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
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

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Lightbulb,
  Fan,
  Thermometer,
  Cloud,
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

const Bedroom = () => {
  const lightingScenes = [
    { name: "Bright", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Relax", icon: <Moon className="w-4 h-4" /> },
    { name: "Reading", icon: <Book className="w-4 h-4" /> }, // Assuming Book icon is still needed
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
      {/* Top bar (consistent) */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted">Bedroom - Thu, Jan 12</p>
        <p className="text-sm text-muted">Temperature: 21°C, Humidity: 55%</p>
      </div>

      {/* Grid layout for Bedroom Dashboard */}
      <div className="grid grid-cols-4 gap-4">
        {/* Main Lighting Control */}
        <Card className="col-span-2 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Main Lighting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-semibold text-primary">75%</span>
              <Button variant="default" className="w-24">
                <Power className="w-4 h-4 mr-2" /> On/Off
              </Button>
            </div>
            <Progress value={75} className="h-4 bg-secondary mb-2" />
            <div className="flex justify-between text-xs">
              <span>Dimmer</span>
              <span>Color Temp</span>
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
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium">Lighting Scenes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {lightingScenes.map((scene, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                {scene.icon}
                {scene.name}
              </div>
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
            <Progress value={50} className="h-2 bg-secondary mt-2" />
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
              <div key={idx} className="flex items-center gap-2 text-sm cursor-pointer">
                {device.icon}
                {device.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions / Sleep Modes */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map((action, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm cursor-pointer">
                {action.icon}
                {action.name}
              </div>
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
              <Volume2 className="w-5 h-5 text-primary" />
              <Progress value={60} className="h-2 w-3/4 bg-secondary" />
              <span className="text-sm">60%</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="secondary">Play</Button>
              <Button variant="secondary">Pause</Button>
              <Button variant="secondary">Skip</Button>
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
