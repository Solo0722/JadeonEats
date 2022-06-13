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
        <MapContainer>
          <h2>Where we are located</h2>
        </MapContainer>
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
  overflow-x: hidden;
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const DeliveryAddressContainer = styled.div`
  width: 60%;
  transform: translateY(-30%) !important;
  /* animation: bounceInUp;
  animation-duration: 2s; */

  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
      transform: translate3d(0, 3000px, 0) scaleY(5);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
      transform: translate3d(0, -20px, 0) scaleY(0.9);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
      transform: translate3d(0, 10px, 0) scaleY(0.95);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
      transform: translate3d(0, -5px, 0) scaleY(0.985);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
`;

const MapContainer = styled.div`
  height: 80vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
`;

export default Home;
