import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Badge, Avatar } from "antd";
import { BiSearch, BiUser } from "react-icons/bi";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Drawerbar from "./Drawerbar";
import { AppContext } from "../context/Context";
import SwitchTheme from "./SwitchTheme";
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

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

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
        <img src="/salad.png" alt="logo" width={25} height={25} />
      </LogoContainer>
      <DeliverTo />

      <ToolsContainer>
        <Button
          className="tools-item"
          icon={<BiSearch />}
          type="text"
          onClick={() => navigate("/search")}
        />
        <Button
          className="tools-item"
          icon={<BiUser />}
          type="text"
          onClick={() => navigate("/auth")}
        />
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
                icon={<ShoppingCartOutlined />}
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
// const SearchContainer = styled.div``;
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
const AuthenticationContainer = styled.div``;
const CartContainer = styled.div``;

export default Navbar;
