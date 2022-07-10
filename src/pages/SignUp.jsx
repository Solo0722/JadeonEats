import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox, message } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
            <div>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Last Name"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  min: 10,
                  max: 13,
                  message: "Please input your mobile number!",
                },
              ]}
            >
              <Input
                prefix={<MobileOutlined className="site-form-item-icon" />}
                placeholder="Mobile number"
                type={"tel"}
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input
                prefix={<HiLocationMarker className="site-form-item-icon" />}
                placeholder="Location"
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
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
              />
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
          <LinksContainer>
            <Link to="/login">Already registered? Sign in</Link>
          </LinksContainer>
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

export default SignUp;
