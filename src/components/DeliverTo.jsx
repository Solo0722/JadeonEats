import { Dropdown, Menu, Tooltip } from "antd";
import React, { useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/Context";

const DeliverTo = () => {
  const navigate = useNavigate();

  const dropdownMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a href="">Use current location</a>,
        },
        {
          key: "2",
          label: (
            <a onClick={() => navigate("/location-picker")}>
              Pick location from map
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <Container>
      <Dropdown overlay={dropdownMenu} trigger={"click"}>
        <div className="input-wrapper">
          <HiLocationMarker
            className="icon"
            size={24}
            onClick={() => navigate("/location-picker")}
          />
          <button
            className="input-field"
            type="text"
            placeholder="Delivery Address"
          >
            Delivery Address
          </button>
        </div>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
    background: #f7f7f7;
    border-radius: 20px;
    border: none;
  }
`;

export default DeliverTo;
