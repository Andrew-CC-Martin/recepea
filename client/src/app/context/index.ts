import { createContext } from "react";
import { AxiosInstance } from "axios";

import { api } from "../data";

// create a custom type to restrict theme to only be these values
// type ThemeType = "LIGHT" | "DARK";

interface AppContextInterface {
  // theme: ThemeType;
  api: AxiosInstance;
}

// First param to createContext is defaultValue
export const AxiosContext = createContext<AppContextInterface>({
  api,
});
