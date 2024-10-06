import axios from "axios";
import { useEffect, useState } from "react";
import { List, Typography, Card, Spin } from "antd";

const { Title, Paragraph } = Typography;

const GetAllUser = () => {
  const [users, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all")
      .then((response) => {
        setAllUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Title level={4}>{error}</Title>;
  }

  return (
    <>
      <Title level={2}>All Users</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <Card title={`User ID: ${user.id}`}>
              <Paragraph strong>Name: {user.name}</Paragraph>
              <Paragraph>Age: {user.age}</Paragraph>
              <Paragraph>Email: {user.email}</Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default GetAllUser;
