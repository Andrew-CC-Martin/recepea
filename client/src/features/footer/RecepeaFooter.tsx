import { FC, useContext } from "react";
import { Layout, Menu } from "antd";
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
      icon: <HomeOutlined />,
    },
    {
      key: "shopping-cart",
      icon: <ShoppingCartOutlined />,
    },
    {
      key: "likes",
      icon: <HeartOutlined />,
    },
    {
      key: "profile",
      icon: <UserOutlined />,
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
