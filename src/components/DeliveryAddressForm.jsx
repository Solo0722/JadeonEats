import { Affix, Button, Checkbox, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import styled from "styled-components";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const { setDeliveryAddress } = useContext(AppContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.deliveryAddress);
    setDeliveryAddress(values.deliveryAddress);
    window.location.replace("/menu");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormContainer>
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
            style={{
              animation: "fadeIn 1s ease-in both",
              animationDelay: "2s",
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Find food
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  input {
    animation: fadeIn 1s ease-in both;
    animation-delay: 2s;
  }

  button {
    animation: fadeIn 1s ease-in both;
    animation-delay: 3s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default DeliveryAddressForm;
