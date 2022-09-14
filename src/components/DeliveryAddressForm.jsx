import { Affix, Button, Checkbox, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const { setDeliveryAddress } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.deliveryAddress);
    setDeliveryAddress(values.deliveryAddress);
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
      autoComplete="on"
      style={{ zIndex: "50" }}
    >
      <Form.Item
        name="deliveryAddress"
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
          placeholder="Enter delivery address eg. Autonomy Hall room 25"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" size="large">
          Find food
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DeliveryAddressForm;
