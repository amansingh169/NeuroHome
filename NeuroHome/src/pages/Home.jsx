import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ThemeSelector from "@/components/ThemeSelector";
import {
  Home as HomeIcon,
  Camera,
  Power,
  Thermometer,
  Book,
  Briefcase,
  Heart,
} from "lucide-react";

const Home = () => {
  const { theme } = useContext(ThemeContext); // Ensure context is applied

  const rooms = [
    { name: "Living room", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Bedroom", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Kitchen", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Office", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Bathroom", icon: <HomeIcon className="w-4 h-4" /> },
  ];

  const devices = [
    { name: "Camera", icon: <Camera className="w-4 h-4" /> },
    { name: "Robotic Vacuum", icon: <Power className="w-4 h-4" /> },
    { name: "Air Conditioning", icon: <Thermometer className="w-4 h-4" /> },
  ];

  const modes = [
    { name: "Reading", icon: <Book className="w-4 h-4" /> },
    { name: "Working", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Romantic", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Theme selector */}
      <ThemeSelector />

      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted">Thu, Jan 12</p>
        <p className="text-sm text-muted">Today will be cloudy. Apply SPF during the day.</p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-4 gap-4">
        {/* Rooms */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium text-primary">Rooms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {rooms.map((room, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                {room.icon}
                {room.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lighting */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-primary">Lighting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>30%</span>
              <span>80%</span>
            </div>
            <Progress value={30} className="h-2 bg-secondary" />
          </CardContent>
        </Card>

        {/* Devices */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium text-primary">Devices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {devices.map((device, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                {device.icon}
                {device.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Modes */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium text-primary">Modes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {modes.map((mode, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                {mode.icon}
                {mode.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Temperature */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium text-primary">Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-muted">
              <div className="text-center">
                <p className="text-2xl font-medium text-primary">20°C</p>
                <p className="text-xs">Current</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-primary">23°C</p>
                <p className="text-xs">Target</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-primary">80°C</p>
                <p className="text-xs">Water</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Electricity */}
        <Card className="col-span-1 text-muted">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-primary">Electricity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs mb-1">Month</p>
            <p className="text-2xl font-medium mb-2 text-primary">360kW</p>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>

        {/* Wi-Fi */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm text-muted font-medium text-primary">Wi-Fi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-muted text-sm">
            <p>25 M²</p>
            <p>25%</p>
            <p>15 Min Loft</p>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card className="col-span-4">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-4">
              <Button variant="default" className="w-full">Go Dock</Button>
              <Button variant="default" className="w-full">Push</Button>
              <Button variant="default" className="w-full">Action</Button>
              <Button variant="default" className="w-full">Gosling</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
