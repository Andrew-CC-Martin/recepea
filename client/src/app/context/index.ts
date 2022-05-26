import { createContext } from "react";

// create a custom type to restrict theme to only be these values
type ThemeType = "LIGHT" | "DARK";

interface AppContextInterface {
  theme: ThemeType;
}

// First param to createContext is defaultValue
export const Context = createContext<AppContextInterface>({
  theme: "LIGHT",
});
