import { FC, useContext } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { ThemeContext } from "../../app/context";

const { Header } = Layout;

const HeaderMenu: FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const iconStyle = { fontSize: "20px" };

  const menuItems = [
    {
      key: "home",
      icon: (
        <Link to="/">
          <HomeOutlined style={iconStyle} />
        </Link>
      ),
    },
    {
      key: "pantry",
      icon: (
        <Link to="/pantry">
          <ShoppingCartOutlined style={iconStyle} />
        </Link>
      ),
    },
    {
      key: "saved-recipes",
      icon: (
        <Link to="/saved-recipes">
          <HeartOutlined style={iconStyle} />
        </Link>
      ),
    },
    {
      key: "profile",
      icon: (
        <Link to="/profile">
          <UserOutlined style={iconStyle} />
        </Link>
      ),
    },
  ];

  // todo - set defaultSelectedKeys for current page where relevant
  // <Menu defaultSelectedKeys={["mail"]}>
  return (
    <>
      <Menu mode="horizontal" items={menuItems} theme={theme} />
    </>
  );
};

export const RecepeaHeader: FC = (): JSX.Element => {
  return (
    <Header style={{ padding: 0 }}>
      <HeaderMenu />
    </Header>
  );
};
