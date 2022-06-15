import { useContext } from "react";
import { Button, Switch, Space, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../app/context";

import { setJWT } from "../auth/authSlice";
import { useAppDispatch } from "../../app/hooks";
import { ThemeContext } from "../../app/context";

export const Profile = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);

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
        <Switch
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Divider />
        <Button type="primary" onClick={logOut}>
          Log out
        </Button>
      </Space>
    </>
  );
};
