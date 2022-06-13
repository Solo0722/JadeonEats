import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SearchTab from "./SearchTab";
import Drawerbar from "./Drawerbar";
import { AppContext } from "../context/Context";

const Navbar = () => {

  const { cart } = useContext(AppContext);
  const location = useLocation();
  return (
    <NavContainer
      style={{
        borderBottom: `${
          location.pathname !== "/" ? "1px solid rgba(255,255,255,0.2)" : null
        }`,
      }}
    >
      <LogoContainer>
        <Button
          type="text"
          href="/"
          icon={<img src="/salad.png" width={30} height={30} />}
        />
      </LogoContainer>
      {/* <SearchContainer>
        <SearchTab />
      </SearchContainer> */}

      <ToolsContainer>
        <AuthenticationContainer>
          <Button href="/login">Login</Button>
          <Button href="/signup">Sign Up</Button>
        </AuthenticationContainer>
        <CartContainer
          style={{
            display: `${location.pathname == "/" ? "none" : "flex"}`,
          }}
        >
          <Badge
            count={cart.total_items}
            overflowCount={"9"}
            color={"gold"}
            children={
              <Button
                type="ghost"
                icon={<ShoppingCartOutlined />}
                href="/cart"
              />
            }
          />
        </CartContainer>
        <Drawerbar />
      </ToolsContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  position: sticky;
  top: 0%;
  backdrop-filter: blur(10px);
  z-index: 100;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div``;
const SearchContainer = styled.div``;
const ToolsContainer = styled.div`
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
