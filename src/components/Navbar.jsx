import { Button, Badge, Avatar, Dropdown, Image, Menu } from "antd";
import { BiSearch, BiUser, BiCartAlt, BiLogOut } from "react-icons/bi";
import { UserOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Drawerbar from "./Drawerbar";
import { AppContext } from "../context/Context";
import DeliverTo from "./DeliverTo";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const { currentUser, logoutUser } = useContext(AppContext);

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const dropdownMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a href="">{currentUser?.displayName}</a>,
        },
        {
          key: "2",
          label: <a href="">{currentUser?.email}</a>,
        },
        {
          key: "3",
          label: (
            <a href="" onClick={logoutUser}>
              Logout
            </a>
          ),
          icon: <BiLogOut />,
        },
      ]}
    />
  );

  return (
    <NavContainer
      className="navbar"
      style={{
        background: `${location.pathname == "/" ? "transparent" : ""}`,
        backdropFilter: `${navbar ? "blur(10px)" : "blur(0px)"}`,
      }}
    >
      <LogoContainer>
        <Drawerbar />
        <img src="/assets/img/logo/logo-2.svg" alt="Logo" />
      </LogoContainer>
      <AddressWrapper>
        <DeliverTo />
      </AddressWrapper>

      <ToolsContainer>
        <Button
          className="tools-item"
          icon={<BiSearch size={20} />}
          style={{ marginRight: "5px" }}
          type="text"
          onClick={() => navigate("/search")}
        />
        {!currentUser ? (
          <Button
            className="tools-item"
            icon={<BiUser size={20} />}
            type="text"
            onClick={() => navigate("/auth")}
          />
        ) : (
          <Dropdown overlay={dropdownMenu}>
            <Avatar
              size="small"
              // src={
              //   <img
              //     src={localStorage.getItem("currentUser")?.photoURL}
              //     width={30}
              //     style={{ zIndex: "100" }}
              //   />
              // }
              // alt={`${currentUser?.email?.slice(0, 1)}`}
              icon={<BiUser />}
            />
          </Dropdown>
        )}
        <CartContainer
          style={{
            display: `${
              location.pathname == "/" || location.pathname == "/checkout"
                ? "none"
                : "block"
            }`,
          }}
        >
          <Badge
            count={cart.total_items}
            overflowCount={"9"}
            color={"#e8505b"}
            children={
              <Button
                className="tools-item"
                type="text"
                icon={<BiCartAlt size={20} />}
                onClick={() => navigate("/cart")}
              />
            }
          />
        </CartContainer>
      </ToolsContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
  background: #fff;
  position: sticky;
  top: 0%;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  h3 {
    font-size: 1.2rem;
    margin-top: 10px;
    margin-left: 7px;
    cursor: pointer;
  }
`;
export const ToolsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 5px;
  }

  button {
    margin-left: 5px;
  }
`;

const AddressWrapper = styled.div`
  display: block;
  width: 50%;
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const CartContainer = styled.div``;

export default Navbar;
