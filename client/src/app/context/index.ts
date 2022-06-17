import { createContext } from "react";
import { AxiosInstance } from "axios";

import { api } from "../data";

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
