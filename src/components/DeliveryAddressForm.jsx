import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/menu");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      // style={{ display: "flex", flexDirection: "row", width: "100%" }}
    >
      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: "Please input a delivery address!",
          },
        ]}
      >
        <Input
          prefix={<HiLocationMarker />}
          size={"large"}
          style={{
            background: "rgba(0,0,0,0.2)",
            backdropFilter: "blur(10px)",
          }}
          placeholder="Enter delivery address"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Find food
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DeliveryAddressForm;
