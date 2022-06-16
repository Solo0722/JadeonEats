import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const DeliveryDetails = ({ next }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DeliveryDetailsContainer>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type={"tel"} />
        </Form.Item>
        <Form.Item
          label="Delivery Address"
          name="delivery_address"
          rules={[
            { required: true, message: "Please input your delivery address!" },
          ]}
        >
          <Input type={"text"} />
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button href="/cart">Back to cart</Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div>
        <a href="/signup">Sign up to save your delivery address</a>
      </div>
    </DeliveryDetailsContainer>
  );
};

const DeliveryDetailsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export default DeliveryDetails;
