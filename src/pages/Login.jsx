import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <LoginContainer>
        <LogoContainer>
          {/* <img src="/salad.png" alt="logo" /> */}
          <h1>Login</h1>
        </LogoContainer>
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
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
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
                Login
              </Button>
            </Form.Item>
          </Form>
        </LoginForm>
        <LinksContainer>
          <a href="#">Forgot Password?</a>
          <Link to="/signup">New here? SignUp</Link>
        </LinksContainer>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    & {
      width: 85%;
    }
  }
`;

const LogoContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
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

const LinksContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default Login;
