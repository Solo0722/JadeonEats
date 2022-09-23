import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { Button } from "antd";
import styled from "styled-components";
import { runFireworks } from "../utils/confetti";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <SuccessContainer>
      <BodyWrapper className="success-wrapper">
        <p>
          <BsBagCheckFill color="green" size={"35px"} />
        </p>
        <h2>Thank you for your purchase :)</h2>
        <h3>Check your email inbox for your receipt.</h3>
        <p>
          If you have any questions, please contact us at{" "}
          <a href="">jadeoneats@gmail.com</a>.
        </p>
        <Button type="primary" onClick={() => navigate("/menu")}>
          Continue Shopping
        </Button>
      </BodyWrapper>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;

export default Success;
