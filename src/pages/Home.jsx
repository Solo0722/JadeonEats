import React from "react";
import styled from "styled-components";
import DeliveryAddressForm from "../components/DeliveryAddressForm";
import Navbar from "../components/Navbar";
import { Button } from "antd";
import Footer from "../components/Footer";

const Home = () => {
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
        <MapContainer></MapContainer>
        <Footer />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  padding: 2rem;
  position: relative;
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
  transform: translateY(-30%) !important;

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
`;

const MapContainer = styled.div`
  height: 80vh;
  border-top: 1px solid red;
`;

export default Home;
