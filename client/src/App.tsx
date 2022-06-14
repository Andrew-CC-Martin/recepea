import { Route, Routes } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Layout } from "antd";

import "./App.css";

import { SignUp } from "./features/auth/signup/SignUp";
import { LogIn } from "./features/auth/login/LogIn";
import { Home } from "./features/home/Home";
import { Ingredients } from "./features/pantry/Ingredients";
import { RecepeaFooter } from "./features/footer/RecepeaFooter";
import { AuthContext, AxiosContext, ThemeContext } from "./app/context";
import { api } from "./app/data";
import { ThemeType } from "./app/context";
import { getJWT } from "./features/auth/authSlice";
import { useAppSelector } from "./app/hooks";

const { Content } = Layout;

export const App: FC = () => {
  const jsonWebToken = useAppSelector(getJWT);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (jsonWebToken) {
      setAuthenticated(true);
    }
  }, [jsonWebToken]);

  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <div className="App">
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <AxiosContext.Provider value={{ api }}>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                {authenticated && (
                  <Route path="/ingredients" element={<Ingredients />} />
                )}
              </Routes>
            </Content>
            <RecepeaFooter />
          </AxiosContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};
