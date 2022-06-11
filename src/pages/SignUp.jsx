import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox, message } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    message.success("User successfully created");

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button
        icon={<LeftOutlined />}
        style={{ position: "absolute", top: "5%", left: "3%", zIndex: "30" }}
        href="/"
      />
      <SignUpContainer>
        <h1>Sign Up</h1>
        <LoginForm>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                },
              ]}
            >
              <Input
                prefix={<MobileOutlined className="site-form-item-icon" />}
                placeholder="Mobile number"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ width: "100%" }}
              >
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </LoginForm>
      </SignUpContainer>
    </>
  );
};

const SignUpContainer = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    & {
      width: 85%;
    }
  }
`;

const LoginForm = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default SignUp;
