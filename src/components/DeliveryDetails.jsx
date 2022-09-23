import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { ArrowLeftOutlined } from "@ant-design/icons";

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

  const navigate = useNavigate();

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
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email address!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type={"tel"} placeholder="Phone number" />
        </Form.Item>
        <Form.Item
          name="delivery_address"
          rules={[
            { required: true, message: "Please input your delivery address!" },
          ]}
        >
          <Input
            placeholder="Address"
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
            <Button
              onClick={() => navigate("/cart")}
              type={"text"}
              icon={<ArrowLeftOutlined />}
            >
              Back to cart
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </DeliveryDetailsContainer>
  );
};

const DeliveryDetailsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;

  input {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 1px;
  }
`;

export default DeliveryDetails;
