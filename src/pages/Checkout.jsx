import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Steps } from "antd";
import DeliveryDetails from "../components/DeliveryDetails";
import { ShopFilled } from "@ant-design/icons";
import PaymentDetails from "../components/PaymentDetails";
import { AppContext } from "../context/Context";
import Navbar from "../components/Navbar";

const { Step } = Steps;

const Checkout = () => {
  const { generateCheckoutToken, order, cart } = useContext(AppContext);

  useEffect(() => {
    cart && generateCheckoutToken();
  }, [cart]);

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const Confirmation = () => {
    return (
      <div>
        <h2>Thank You for your purchase</h2>
        <Button type="primary" href="/menu">
          Back to home
        </Button>
      </div>
    );
  };

  const steps = [
    {
      title: "Delivery Details",
      content: <DeliveryDetails next={next} />,
    },
    {
      title: "Payment Details",
      content: <PaymentDetails prev={prev} next={next} />,
    },
    {
      title: "Confirmation",
      content: <Confirmation />,
    },
  ];

  return (
    <>
      <Navbar />
      <CheckoutContainer>
        <Steps current={current} size="small">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <StepsContent>{steps[current].content}</StepsContent>
        {/* <DeliveryDetails /> */}
      </CheckoutContainer>
    </>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  min-height: calc(100vh - 60px);

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

const StepsContent = styled.div`
  margin-top: 30px;
  width: 100%;
`;

export default Checkout;
