// src/pages/Bedroom.jsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { BedDouble, Lamp, ThermometerSun } from "lucide-react";
import { cn } from "@/lib/utils"; // if you're using classnames utility like Tailwind's `cn`

const Bedroom = () => {
  const [lampOn, setLampOn] = useState(true);
  const [acOn, setAcOn] = useState(false);

  return (
    <div className="min-h-screen px-6 py-10 bg-secondary text-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Bedroom Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Lamp Control */}
        <Card className="bg-primary border border-neutral-700 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Lamp className="w-5 h-5 text-yellow-400" />
              Bedside Lamp
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <span className={cn("text-sm", lampOn ? "text-primary" : "text-muted")}>
              {lampOn ? "On" : "Off"}
            </span>
            <Switch
              checked={lampOn}
              onCheckedChange={setLampOn}
              className="data-[state=checked]:bg-yellow-500"
            />
          </CardContent>
        </Card>

        {/* AC Control */}
        <Card className="bg-neutral-900 border border-neutral-700 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThermometerSun className="w-5 h-5 text-cyan-400" />
              Air Conditioner
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <span className={cn("text-sm", acOn ? "text-primary" : "text-muted")}>
              {acOn ? "Cooling" : "Off"}
            </span>
            <Switch
              checked={acOn}
              onCheckedChange={setAcOn}
              className="data-[state=checked]:bg-cyan-500"
            />
          </CardContent>
        </Card>

        {/* Bed Status */}
        <Card className="bg-neutral-900 border border-neutral-700 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BedDouble className="w-5 h-5 text-purple-400" />
              Bed Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-400">
              Sheets are clean. Room temperature is ideal for sleep.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bedroom;
