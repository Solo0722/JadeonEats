import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Form, Input, Button, Divider, message } from "antd";
import { GoogleSquareFilled } from "@ant-design/icons";
import { AppContext } from "../context/Context";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form] = Form.useForm();
  const { signInWithGoogle, signInUser, signUpUser } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    isSignUp ? signUpUser(values) : signInUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed: ${errorInfo}`);
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
              name="name"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Invalid name!",
                },
              ]}
            >
              <Input placeholder="Full name" />
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

        <DividerContainer>
          <Divider />
          <span>or</span>
          <Divider />
        </DividerContainer>
        <button
          type="button"
          className="login-with-google-btn"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
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

  .login-with-google-btn {
    transition: background-color 0.3s, box-shadow 0.3s;
    width: 100%;
    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;

    &:hover {
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: #eeeeee;
    }

    &:focus {
      outline: none;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
        0 0 0 3px #c8dafc;
    }

    &:disabled {
      filter: grayscale(100%);
      background-color: #ebebeb;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    margin: 0px 5px;
  }
`;

export default Auth;
