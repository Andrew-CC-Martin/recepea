import { FC, useContext } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { ThemeContext } from "../../app/context";

const { Header } = Layout;

export const getActiveMenuItem = (path: string): string => {
  const pathName = path.substring(1);
  return pathName || "home";
};

const HeaderMenu: FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  const activeMenuItem = getActiveMenuItem(pathname);

  const iconStyle = {
    fontSize: "24px",
    marginLeft: "10px",
  };

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
      <Menu
        defaultSelectedKeys={[activeMenuItem]}
        mode="horizontal"
        items={menuItems}
        theme={theme}
      />
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
