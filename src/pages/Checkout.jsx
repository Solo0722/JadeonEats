import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Steps } from "antd";
import DeliveryDetails from "../components/DeliveryDetails";
import { ShopFilled } from "@ant-design/icons";
import PaymentDetails from "../components/PaymentDetails";

const { Step } = Steps;

const Checkout = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos) {
  //   var crd = pos.coords;

  //   console.log("Your current position is:");
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function errors(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.permissions
  //       .query({ name: "geolocation" })
  //       .then(function (result) {
  //         if (result.state === "granted") {
  //           console.log(result.state);
  //           //If granted then you can directly call your function here
  //         } else if (result.state === "prompt") {
  //           console.log(result.state);
  //           navigator.geolocation.getCurrentPosition(success, errors, options);
  //         } else if (result.state === "denied") {
  //           //If denied then you have to show instructions to enable location
  //         }
  //         result.onchange = function () {
  //           console.log(result.state);
  //         };
  //       });
  //   } else {
  //     alert("Sorry Not available!");
  //   }
  // }, []);

  const steps = [
    {
      title: "Delivery Details",
      content: <DeliveryDetails next={next} />,
    },
    {
      title: "Payment Details",
      content: <PaymentDetails prev={prev} />,
    },
  ];

  return (
    <CheckoutContainer>
      <Steps current={current} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <StepsContent>{steps[current].content}</StepsContent>
      {/* <DeliveryDetails /> */}
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-top:30px;
  min-height: 100vh;

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
