import { Input } from "antd";
import React, { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { AppContext } from "../context/Context";

const DeliverTo = () => {
  const { setDeliveryAddress } = useContext(AppContext);

  return (
    <Container>
      <h3>Deliver To:</h3>
      <Input
        style={{ borderRadius: "20px" }}
        prefix={<HiLocationMarker />}
        defaultValue={JSON.parse(localStorage.getItem("deliveryAddress"))}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  min-height: 65px;
  width: 100%;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: none;
      text-align: left;
    }

    h3 {
      width: 100%;
    }
  }
`;

export default DeliverTo;
