import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ThemeSelector = () => {
  const { theme, setTheme, availableThemes } = useContext(ThemeContext);
  const selected = availableThemes.find((t) => t.name === theme);

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[200px] text-primary bg-card rounded-full">
        <SelectValue
          placeholder="Theme"
          children={
            <div className="flex items-center gap-2 text-sm">
              {selected?.icon}
              {selected?.name.charAt(0).toUpperCase() + selected?.name.slice(1)} Theme
            </div>
          }
        />
      </SelectTrigger>

      <SelectContent className="bg-card">
        {availableThemes.map((t) => (
          <SelectItem value={t.name} key={t.name}>
            <div className="flex items-center gap-2 text-muted">
              {t.icon}
              {t.name.charAt(0).toUpperCase() + t.name.slice(1)} Theme
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSelector;
