import { Layout, Typography, Button, Card } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: '#fff' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          Welcome to My Application
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Card title="Home Page" bordered={false}>
          <Title level={2}>Welcome!</Title>
          <Paragraph>
            This is the home page of the application.
          </Paragraph>
          <Button type="primary" onClick={() => alert("Explore more features!")}>
            Explore Features
          </Button>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} My Application. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default Home;
