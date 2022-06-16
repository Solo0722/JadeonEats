import React, { useContext } from "react";
import styled from "styled-components";
import { Input, Button, Form } from "antd";
import { AppContext } from "../context/Context";

const PaymentDetails = ({ prev }) => {
  const { cart } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <PaymentDetailsContainer>
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
          label="Email address"
          name="email"
          rules={[
            { required: true, message: "Please input your email address!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name on card"
          name="cardholdername"
          rules={[
            { required: true, message: "Please input your cardholder name!" },
          ]}
        >
          <Input type={"text"} />
        </Form.Item>
        <Form.Item
          label="Card number"
          name="card_number"
          rules={[
            {
              required: true,
              message: "Please input your card number!",
            },
          ]}
        >
          <Input type={"text"} />
        </Form.Item>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Form.Item
            label="Expiration date"
            name="expiration_date"
            rules={[
              {
                required: true,
                message: "Please input your expiration date!",
              },
            ]}
            style={{ width: "70%" }}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            label="CVC"
            name="cvc"
            rules={[
              {
                required: true,
                message: "Please input your cvc!",
              },
            ]}
            style={{ width: "25%" }}
          >
            <Input type={"text"} />
          </Form.Item>
        </div>
        <Form.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button onClick={() => prev()}>Back</Button>
            <Button type="primary" htmlType="submit">
              Pay {cart.subtotal.formatted_with_symbol}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </PaymentDetailsContainer>
  );
};

const PaymentDetailsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export default PaymentDetails;
