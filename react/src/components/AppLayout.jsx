import { Outlet, Link } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";

const { Header, Content, Footer } = AntLayout;

const AppLayout = () => {
  return (
    <AntLayout style={{ minHeight: '100vh', minWidth: "100vw" }}>
      <Header>
        <div />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="post">
            <Link to="/post">Post User</Link>
          </Menu.Item>
          <Menu.Item key="get">
            <Link to="/get">Get All User</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};

export default AppLayout;
