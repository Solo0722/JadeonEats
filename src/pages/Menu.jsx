import { Spin, message, Input } from "antd";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import DeliverTo from "../components/DeliverTo";
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
        <Wrapper>
          <DeliverTo />
          <MealsContainer>
            {!products ? (
              <Spin />
            ) : (
              products.map((product) => (
                <MealCard product={product} handleAddToCart={handleAddToCart} />
              ))
            )}
          </MealsContainer>
        </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-bottom: 20px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      margin-left: 0;
    }
  }
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Menu;
