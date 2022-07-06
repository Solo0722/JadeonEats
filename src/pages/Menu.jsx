import { Spin, message, Input } from "antd";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeliverTo from "../components/DeliverTo";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";

const Menu = () => {
  const { products, handleAddToCart, fetchProducts, fetchSpecificCategory } =
    useContext(AppContext);

  const { category } = useParams();

  useEffect(() => {
    if (category === undefined || category === null) {
      fetchProducts();
    } else {
      fetchSpecificCategory(category);
    }
  }, [category]);

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
                <MealCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
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
