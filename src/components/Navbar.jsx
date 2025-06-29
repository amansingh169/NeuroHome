import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="w-full border-b shadow-sm bg-background px-6 py-3">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                MyHome
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/living-room"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                Living Room
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/bedroom"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                Bedroom
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/kitchen"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                Kitchen
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/office"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                Office
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/bathroom"
                className="text-sm font-medium hover:text-accent-foreground transition-colors"
              >
                Bathroom
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
