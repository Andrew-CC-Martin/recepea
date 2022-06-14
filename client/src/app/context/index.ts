import { createContext } from "react";
import { AxiosInstance } from "axios";

import { api } from "../data";

// create a custom type to restrict theme to only be these values
export type ThemeType = "light" | "dark";

export interface ThemeContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  setTheme: (_theme: ThemeType) => {},
});

interface ApiContextInterface {
  api: AxiosInstance;
}

// First param to createContext is defaultValue
export const AxiosContext = createContext<ApiContextInterface>({
  api,
});

interface AuthContextInterface {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  authenticated: false,
  setAuthenticated: (_authenticated: boolean) => {},
});
