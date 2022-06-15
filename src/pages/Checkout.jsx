import React from "react";
import styled from "styled-components";
import { Steps } from "antd";
import DeliveryDetails from "../components/DeliveryDetails";

const { Step } = Steps;

const Checkout = () => {
  return (
    <CheckoutContainer>
      {/* <Steps current={0}>
        <Step title="Delivery Details"/>
        <Step title="Payment Details">World</Step>
      </Steps> */}
      <DeliveryDetails />
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  height: 100vh;
`;

export default Checkout;
