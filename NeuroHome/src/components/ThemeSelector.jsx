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

  return (
    // <select
    //   className="form-select"
    //   value={theme}
    //   onChange={(e) => {
    //     setTheme(e.target.value);
    //   }}
    //   style={{ width: "300px" }}
    // >
    // {availableThemes.map((theme) => (
    //   <option value={theme.name} key={theme.name}>
    //     {theme.icon}
    //     {theme.name.charAt(0).toUpperCase() + theme.name.slice(1) + " Theme"}
    //   </option>
    // ))}
    // </select>

    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {availableThemes.map((theme) => (
          <SelectItem value={theme.name}>
            {theme.name.charAt(0).toUpperCase() + theme.name.slice(1) + " Theme"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSelector;
