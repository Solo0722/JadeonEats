import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Drawerbar from "./Drawerbar";
import { AppContext } from "../context/Context";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <NavContainer className="navbar">
      <LogoContainer>
        <Drawerbar />
        <h3 onClick={() => navigate("/menu")}>
          Jadeon
          <span style={{ fontWeight: "bolder", color: "orangered" }}>Eats</span>
        </h3>
      </LogoContainer>

      <ToolsContainer>
        <SwitchTheme />
        <Button
          icon={<SearchOutlined />}
          type="ghost"
          onClick={() => navigate("/search")}
          style={{
            display: `${
              location.pathname == "/" || location.pathname == "/checkout"
                ? "none"
                : "block"
            }`,
          }}
        />
        <CartContainer
          style={{
            display: `${
              location.pathname == "/" || location.pathname == "/checkout"
                ? "none"
                : "block"
            }`,
            marginLeft: "5px",
          }}
        >
          <Badge
            count={cart.total_items}
            overflowCount={"9"}
            color={"orangered"}
            children={
              <Button
                type="ghost"
                icon={<ShoppingCartOutlined />}
                href="/cart"
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
