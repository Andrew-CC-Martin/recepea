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

const { Footer } = Layout;

const FooterMenu: FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const menuItems = [
    {
      key: "home",
      icon: (
        <Link to="/">
          <HomeOutlined />
        </Link>
      ),
    },
    {
      key: "pantry",
      icon: (
        <Link to="/pantry">
          <ShoppingCartOutlined />
        </Link>
      ),
    },
    {
      key: "saved-recipes",
      icon: (
        <Link to="/saved-recipes">
          <HeartOutlined />
        </Link>
      ),
    },
    {
      key: "profile",
      icon: (
        <Link to="/profile">
          <UserOutlined />
        </Link>
      ),
    },
  ];

  // todo - set defaultSelectedKeys for current page where relevant
  // <Menu defaultSelectedKeys={["mail"]}>
  return <Menu mode="horizontal" items={menuItems} theme={theme} />;
};

export const RecepeaFooter = () => {
  return (
    <Footer>
      <FooterMenu />
    </Footer>
  );
};
