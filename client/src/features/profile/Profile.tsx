import { useContext } from "react";
import { Button, Switch, Space, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../app/context";
import { useThemeSwitcher } from "react-css-theme-switcher";

import { setJWT } from "../auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

export const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  const toggleTheme = () =>
    switcher({ theme: currentTheme === "light" ? themes.dark : themes.light });

  const logOut = () => {
    dispatch(setJWT(""));
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Divider>Set Theme</Divider>
        <Switch checked={currentTheme === "light"} onChange={toggleTheme} />
        <Divider />
        <Button type="primary" onClick={logOut}>
          Log out
        </Button>
      </Space>
    </>
  );
};
