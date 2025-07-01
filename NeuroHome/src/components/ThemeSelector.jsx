import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ThemeSelector = () => {
  const { theme, setTheme, availableThemes } = useContext(ThemeContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[200px] justify-between bg-secondary text-primary border-primary hover:bg-secondary"
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[200px] bg-primary text-secondary border border-primary shadow-lg rounded-md hover:bg-neutral"
        align="end"
      >
        {availableThemes.map((t) => (
          <DropdownMenuItem
            key={t}
            onClick={() => setTheme(t)}
            className={`cursor-pointer px-3 py-2 text-sm rounded-md ${
              theme === t ? "font-semibold text-primary" : "text-neutral-300"
            } hover:bg-card hover:text-primary`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)} Theme
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
