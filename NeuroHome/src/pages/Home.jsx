import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Home, 
  Sun, 
  Camera, 
  Wifi, 
  Clock,
  Droplet,
  Thermometer,
  Power,
  Coffee,
  Book,
  Briefcase,
  Heart
} from "lucide-react"

const SmartHomeGrid= () =>{
  const rooms = [
    { name: "Living room", icon: <Home className="w-4 h-4" /> },
    { name: "Bedroom", icon: <Home className="w-4 h-4" /> },
    { name: "Kitchen", icon: <Home className="w-4 h-4" /> },
    { name: "Office", icon: <Home className="w-4 h-4" /> },
    { name: "Bathroom", icon: <Home className="w-4 h-4" /> }
  ]

  const devices = [
    { name: "Camera", icon: <Camera className="w-4 h-4" /> },
    { name: "Robotic Vacuum", icon: <Power className="w-4 h-4" /> },
    { name: "Air Conditioning", icon: <Thermometer className="w-4 h-4" /> }
  ]

  const modes = [
    { name: "Reading", icon: <Book className="w-4 h-4" /> },
    { name: "Working", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Romantic", icon: <Heart className="w-4 h-4" /> }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header with date and weather */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">Thu, Jan 12</p>
        <p className="text-sm text-muted-foreground">
          Today will be cloudy. Apply SPF during the day.
        </p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Rooms card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Rooms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {rooms.map((room, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer">
                {room.icon}
                {room.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lighting card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Lighting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>30%</span>
              <span>80%</span>
            </div>
            <Progress value={30} className="h-2" />
          </CardContent>
        </Card>

        {/* Devices card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Devices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {devices.map((device, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer">
                {device.icon}
                {device.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Modes card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Modes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {modes.map((mode, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer">
                {mode.icon}
                {mode.name}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Temperature card */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="text-center">
                <p className="text-2xl font-medium">20°C</p>
                <p className="text-xs text-muted-foreground">Current</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium">23°C</p>
                <p className="text-xs text-muted-foreground">Target</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium">80°C</p>
                <p className="text-xs text-muted-foreground">Water</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Electricity card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Electricity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-1">Month</p>
            <p className="text-2xl font-medium mb-2">360kW</p>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>

        {/* WiFi card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Wi-Fi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-sm">25 M²</p>
            <p className="text-sm">25%</p>
            <p className="text-sm">15 Min Loft</p>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <Card className="col-span-4">
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-4">
              <Button variant="secondary" className="w-full">
                Go Dock
              </Button>
              <Button variant="secondary" className="w-full">
                Push
              </Button>
              <Button variant="secondary" className="w-full">
                Action
              </Button>
              <Button variant="secondary" className="w-full">
                Gosling
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SmartHomeGrid;