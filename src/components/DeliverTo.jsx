import {  Tooltip } from "antd";
import React, { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/Context";

const DeliverTo = () => {
  const { setDeliveryAddress } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Container>
      {/* <input
        style={{ borderRadius: "20px" }}
        prefix={<HiLocationMarker />}
        defaultValue={JSON.parse(localStorage.getItem("deliveryAddress"))}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      /> */}
      <div class="input-wrapper">
        <Tooltip title="Pick location from map">
          <HiLocationMarker
            className="icon"
            size={24}
            onClick={() => navigate("/location-picker")}
          />
        </Tooltip>
        <input
          class="input-field"
          type="text"
          placeholder="Address"
          defaultValue={JSON.parse(localStorage.getItem("deliveryAddress"))}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;

  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .icon {
    position: absolute;
    top: 12%;
    left: 2%;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  .icon:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .input-field {
    width: 100%;
    padding: 7px 15px;
    padding-left: 45px;
    background: #eeeeee;
    border-radius: 20px;
    border: none;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default DeliverTo;
