import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { AuthApiService } from "../../../api/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const login = async (values: LoginFormData) => {
    try {
      const login = await AuthApiService.httpLogin(values);
      const { accessToken, user } = login;
      setUser(accessToken, user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form
        name="login"
        style={{ width: 400 }}
        onFinish={login}
        className=" p-6 rounded-xl shadow-lg"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            size="large"
            className="h-12"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            size="large"
            className="h-12"
          />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            className="h-12 text-lg"
          >
            Log in
          </Button>
          <div className="mt-2 text-center">
            or <a href="/register">Register now!</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
