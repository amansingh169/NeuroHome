// src/pages/Bedroom.jsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { BedDouble, Lamp, ThermometerSun } from "lucide-react";
import { cn } from "@/lib/utils";

const Bedroom = () => {
  const [lampOn, setLampOn] = useState(true);
  const [acOn, setAcOn] = useState(false);

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color-accent)",
      }}
    >
      <h1
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: "var(--accent-color)" }}
      >
        Bedroom Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Lamp Control */}
        <Card
          className="shadow-md"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lamp className="w-5 h-5 text-yellow-400" />
              Bedside Lamp
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <span
              className="text-sm"
              style={{
                color: lampOn ? "var(--text-color-accent)" : "var(--text-color)",
              }}
            >
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
        <Card
          className="shadow-md"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThermometerSun className="w-5 h-5 text-cyan-400" />
              Air Conditioner
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <span
              className="text-sm"
              style={{
                color: acOn ? "var(--text-color-accent)" : "var(--text-color)",
              }}
            >
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
        <Card
          className="shadow-md"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BedDouble className="w-5 h-5 text-purple-400" />
              Bed Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm" style={{ color: "var(--text-color)" }}>
              Sheets are clean. Room temperature is ideal for sleep.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bedroom;
