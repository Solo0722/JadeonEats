import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeliverTo from "../components/DeliverTo";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";
import SkeletonAnimation from "../utils/skeleton";

const Menu = () => {
  const {
    products,
    handleAddToCart,
    fetchProducts,
    fetchSpecificCategory,
    setDeliveryAddress,
  } = useContext(AppContext);

  const { category } = useParams();

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    let crd = pos.coords;
    setDeliveryAddress({
      lat: crd.latitude,
      lng: crd.longitude,
      accuracy: crd.accuracy,
    });
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            console.log("Denied");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry,Geolocation Not available!");
    }
  }, []);

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
          <AddressWrapper>
            <DeliverTo />
          </AddressWrapper>
          <MealsContainer>
            {!products || products.length === 0 ? (
              <SkeletonAnimation />
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

const AddressWrapper = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    & {
      display: block;
    }
  }
`;

export default Menu;
