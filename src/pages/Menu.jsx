import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";

const meals = [
  {
    name: "Fried rice and chicken",
    price: "20.00",
    rating: 4.8,
    img: "",
  },
  {
    name: "Pepperoni Pizza",
    price: "45.00",
    rating: 4.2,
    img: "",
  },
  {
    name: "Fufu and Groundnut soup",
    price: "30.00",
    rating: 4.9,
    img: "",
  },
  {
    name: "Jollof rice and sausage",
    price: "10.00",
    rating: 4.1,
    img: "",
  },
];

const Menu = () => {
  const { products } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <MenuContainer>
        <SideBar />
        <MealsContainer>
          {products.map((product) => (
            <MealCard product={product} />
          ))}
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
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  width: 65%;
  flex-wrap: wrap;
`;

export default Menu;
