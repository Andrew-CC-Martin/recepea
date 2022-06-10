import { createContext } from "react";
import { AxiosInstance } from "axios";

import { api } from "../data";

// create a custom type to restrict theme to only be these values
type ThemeType = "light" | "dark";

interface AppContextInterface {
  theme: ThemeType;
}

export const ThemeContext = createContext<AppContextInterface>({
  theme: "light",
});

interface ApiContextInterface {
  api: AxiosInstance;
}

// First param to createContext is defaultValue
export const AxiosContext = createContext<ApiContextInterface>({
  api,
});
