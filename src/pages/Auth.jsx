import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const toggleAuth = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Wrapper>
      <AuthContainer className="auth">
        <h2>{isSignUp ? "Create a new account" : "Sign in to your account"}</h2>
        <Form
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          {isSignUp && (
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Invalid name!",
                },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
          )}
          {isSignUp && (
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Invalid name!",
                },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Invalid email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          {isSignUp && (
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  min: 8,
                  message: "Invalid phone number!",
                },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                min: 5,
                message: "Invalid password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
        <a onClick={toggleAuth}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Do not have an account yet? Sign Up"}
        </a>
      </AuthContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthContainer = styled.div`
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  min-height: 400px;
  padding: 20px;
  margin: auto;

  input,
  button {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 1px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default Auth;
