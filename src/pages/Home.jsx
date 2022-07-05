import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DeliveryAddressForm from "../components/DeliveryAddressForm";
import Navbar from "../components/Navbar";
import { Button } from "antd";
import Footer from "../components/Footer";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { deliveryAddress } = useContext(AppContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (deliveryAddress) {
  //     navigate("/menu");
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <HomeContainer>
        <LandingContainer>
          <DeliveryAddressContainer>
            <h1>Order food to your door.</h1>
            <DeliveryAddressForm />
            <Button type="text" href="/login" style={{ marginLeft: "-10px" }}>
              Sign in to save your address
            </Button>
          </DeliveryAddressContainer>
          <ImgContainer>
            <img src="pic1.png" />
          </ImgContainer>
        </LandingContainer>
        <AdvertContainer></AdvertContainer>
        <MapContainer>
          <h2>Where we are located</h2>
        </MapContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  padding: 2rem 1rem;
  position: relative;
  overflow-x: hidden;
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const DeliveryAddressContainer = styled.div`
  width: 60%;
  /* transform: translateY(-30%) !important; */
  animation: myAnim 2s ease 0s 1 normal forwards;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(-250px) translateY(-30%);
    }

    100% {
      opacity: 1;
      transform: translateX(0) translateY(-30%);
    }
  }

  h1 {
    font-size: 3.5rem;
  }

  form button {
    width: 40%;
    margin-top: 10px;
  }

  input::placeholder {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
`;

const ImgContainer = styled.div`
  width: 35%;

  img {
    width: 700px;
    height: 610px;
    position: absolute;
    top: -10px;
    right: 0;
  }

  @media screen and (max-width: 768px) and (min-width: 486px) {
    & {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      transform: translateX(20%);
      z-index: -100;
    }
  }

  @media screen and (max-width: 486px) {
    & {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      transform: translateX(70%);
      z-index: -100;
    }
  }
`;

const AdvertContainer = styled.div`
  min-height: 70vh;
  padding: 10px 0;
`;

const MapContainer = styled.div`
  height: 80vh;
  padding: 10px 0;
`;

export default Home;
