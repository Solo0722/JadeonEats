import { Spin } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";

const Menu = () => {
  const { products, handleAddToCart } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <MenuContainer>
        <SideBar />
        <MealsContainer>
          {!products ? (
            <Spin />
          ) : (
            products.map((product) => (
              <MealCard product={product} handleAddToCart={handleAddToCart} />
            ))
          )}
        </MealsContainer>
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* padding: 2rem; */
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  width: 65%;
  margin: 0 auto;
  margin-top: 20px;
  flex-wrap: wrap;
  /* padding-left: 20px; */

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export default Menu;
