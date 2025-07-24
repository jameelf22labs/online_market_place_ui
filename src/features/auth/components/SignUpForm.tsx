import React from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { AuthApiService } from "../../../api/service";
import api from "../../../api/axios.intercept";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const signUp = async (values: SignUpFormData) => {
    try {
      await AuthApiService.httpRegister(values);
      const loginResponse = await AuthApiService.httpLogin({
        email: values.email,
        password: values.password,
      });
      const { accessToken, user } = loginResponse;
      setUser(accessToken, user);
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      navigate("/");
    } catch (error: any) {}
  };

  return (
    <div className="flex items-center justify-center min-h-scree">
      <Form
        name="register"
        className="p-8 shadow-md rounded-md w-full max-w-sm"
        onFinish={signUp}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            className="h-[48px] text-[16px]"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            className="h-[48px] text-[16px]"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className="h-[48px] text-[16px]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="h-[48px] text-[16px]"
          >
            Register
          </Button>
          <div className="mt-2 text-center text-sm">
            or <a href="/login">Login</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
