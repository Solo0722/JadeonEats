import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { AppContext } from "../context/Context";

const DeliveryDetails = ({ next }) => {
  const { setShippingData } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    setShippingData(values);
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="e.g  John" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="e.g Doe" />
          </Form.Item>
        </div>

        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email address!",
            },
          ]}
        >
          <Input placeholder="e.g johndoe@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type={"tel"} placeholder="e.g +233591172136" />
        </Form.Item>
        <Form.Item
          label="Delivery Address"
          name="delivery_address"
          rules={[
            { required: true, message: "Please input your delivery address!" },
          ]}
        >
          <Input
            placeholder="eg. Autonomy Hall room 25"
            type={"text"}
            defaultValue={JSON.parse(localStorage.getItem("deliveryAddress"))}
          />
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
