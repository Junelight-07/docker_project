import axios from "axios";
import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";

const { Title } = Typography;

const defaultUser = {
  name: '',
  age: '',
  email: '',
}
const PostUser = () => {
  const [user, setUser] = useState(defaultUser);

  const createUser = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/form", user, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setUser(defaultUser);
      message.success(`User Created: ${JSON.stringify(response.data, null, 4)}`);
    } catch (err) {
      message.error(err.message || "An error occurred");
    }
  };

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Create User</Title>
      <Form layout="vertical" onFinish={createUser}>
        <Form.Item label="Name">
          <Input
            type="text"
            value={user.name}
            onChange={onChangeForm}
            name="name"
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item label="Age">
          <Input
            type="text"
            value={user.age}
            onChange={onChangeForm}
            name="age"
            placeholder="Age"
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="text"
            value={user.email}
            onChange={onChangeForm}
            name="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostUser;
