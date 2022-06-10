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

  return (
    <Menu mode="horizontal" theme={theme}>
      <Menu.Item key="mail" icon={<HomeOutlined />} />
      <Menu.Item key="mail" icon={<ShoppingCartOutlined />} />
      <Menu.Item key="mail" icon={<HeartOutlined />} />
      <Menu.Item key="mail" icon={<UserOutlined />} />
    </Menu>
  );
  // todo - set defaultSelectedKeys for current page where relevant
  // <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
};

export const RecepeaFooter = () => {
  return (
    <Footer>
      <FooterMenu />
    </Footer>
  );
};
