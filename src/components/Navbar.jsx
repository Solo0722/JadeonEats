import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Drawerbar from "./Drawerbar";
import { AppContext } from "../context/Context";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const location = useLocation();
  return (
    <NavContainer className="navbar">
      <LogoContainer>
        {/* <div
          style={{ display: "flex", flexDirection: "row", textAlign: "left" }}
        >
          <img src="/salad.png" width={30} height={30} />
          <h4 style={{ margin: "5px 0px 0px 7px" }}>
            <span style={{ color: "gold" }}>Jadeon</span>Eats
          </h4>
        </div> */}
        <h3>
          Jadeon<span style={{ fontWeight: "bolder" }}>Eats</span>
        </h3>
      </LogoContainer>

      <ToolsContainer>
        <SwitchTheme />
        <Button icon={<SearchOutlined />} />
        <CartContainer
          style={{
            display: `${location.pathname == "/" ? "none" : "flex"}`,
            marginLeft: "5px",
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
  height: 50px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0%;
  z-index: 100;
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
