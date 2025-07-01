import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <header className="w-full text-muted border-b border-white border-opacity-10 shadow-md bg-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Date */}
        <div className="text-sm text-neutral-400">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>

        {/* Center: Navigation Menu (centered using flex-grow) */}
        <div className="flex-grow flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {[
                { path: "/", label: "Home" },
                { path: "/living-room", label: "Living Room" },
                { path: "/bedroom", label: "Bedroom" },
                { path: "/kitchen", label: "Kitchen" },
                { path: "/office", label: "Office" },
                { path: "/bathroom", label: "Bathroom" },
              ].map(({ path, label }) => (
                <NavigationMenuItem key={path}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "text-white font-semibold" : "text-neutral-400"
                      }
                    >
                      {label}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Right: Avatar */}
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://i.pravatar.cc/40" alt="Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
