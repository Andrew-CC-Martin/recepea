import { Route, Routes } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Layout } from "antd";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import { SignUp } from "./features/auth/signup/SignUp";
import { LogIn } from "./features/auth/login/LogIn";
import { Home } from "./features/home/Home";
import { Ingredients } from "./features/pantry/Ingredients";
import { Profile } from "./features/profile/Profile";
import { RecepeaHeader } from "./features/header/RecepeaHeader";
import { AuthContext, AxiosContext } from "./app/context";
import { api } from "./app/data";
import { getJWT } from "./features/auth/authSlice";
import { getTheme } from "./themes/themeSlice";
import { useAppSelector } from "./app/hooks";
import { NotFound } from "./features/404/404";

const { Content } = Layout;

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

export const App: FC = () => {
  const jsonWebToken = useAppSelector(getJWT);
  const theme = useAppSelector<string>(getTheme);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (jsonWebToken) {
      setAuthenticated(true);
    }
  }, [jsonWebToken]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={theme}
        insertionPoint="styles-insertion-point"
      >
        <AxiosContext.Provider value={{ api }}>
          <Layout style={{ minHeight: "100vh" }}>
            {authenticated && <RecepeaHeader />}
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
                {authenticated && (
                  <>
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/profile" element={<Profile />} />
                  </>
                )}
              </Routes>
            </Content>
          </Layout>
        </AxiosContext.Provider>
      </ThemeSwitcherProvider>
    </AuthContext.Provider>
  );
};
