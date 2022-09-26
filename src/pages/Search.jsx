import React, { useContext } from "react";
import styled from "styled-components";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SearchTab from "../components/SearchTab";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";
import SkeletonAnimation from "../utils/skeleton";

const Search = () => {

  const {products,handleAddToCart} = useContext(AppContext);

  return (
    <>
      <Navbar />
      <MenuContainer>
        <SideBar />
        <Wrapper>
          <SearchTab />
          <MealsContainer>
            {!products ? (
              <SkeletonAnimation />
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
  padding-top: 15px;

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


export default Search;
