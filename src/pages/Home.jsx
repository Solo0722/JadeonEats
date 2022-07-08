import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DeliveryAddressForm from "../components/DeliveryAddressForm";
import Navbar from "../components/Navbar";
import { Button } from "antd";
import Footer from "../components/Footer";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const Home = () => {
  const { deliveryAddress } = useContext(AppContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (deliveryAddress) {
  //     navigate("/menu");
  //   }
  // }, []);

  const location = {
    address: "University of Winneba, Kumasi campus - Ghana",
    lat: "",
    lng: "",
  };

  const reasons = [
    {
      title: "Easy to order",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/easyorder.png",
    },
    {
      title: "Fatest delivery",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/bike2.png",
    },
    {
      title: "Best quality",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/food-delivery.png",
    },
  ];

  const reviews = [
    {
      name: "Solomon O. Ansah",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/myImage.jpg",
    },
    {
      name: "Solomon O. Ansah",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/myImage.jpg",
    },
    {
      name: "Solomon O. Ansah",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in cupiditate. Cum praesentium voluptatum quam sit minima quisquam consectetur ipsa magnam illo culpa reiciendis, dicta, harum et eligendi. Eum, dolore.",
      img: "/myImage.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <HomeContainer>
        <LandingContainer>
          <DeliveryAddressContainer>
            <h1>
              Order <span style={{ color: "orangered" }}>food</span> to your
              door.
            </h1>
            <DeliveryAddressForm />
            <Button type="text" href="/login" style={{ marginLeft: "-10px" }}>
              Sign in to save your address
            </Button>
          </DeliveryAddressContainer>
          <ImgContainer>
            <img src="pic2.png" />
          </ImgContainer>
        </LandingContainer>
        <AdvertContainer>
          <h1>Why choose us</h1>
          <AdWrapper>
            {reasons.map((reason, i) => (
              <ReasonCard key={i}>
                <img src={reason.img} alt="reason-image" />
                <h2>{reason.title}</h2>
                <p>{reason.body}</p>
              </ReasonCard>
            ))}
          </AdWrapper>
        </AdvertContainer>
        <ReviewsSection>
          <h1>What others say about us</h1>
          <AdWrapper2>
            {reviews.map((review, i) => (
              <ReviewCard key={i}>
                <img src={review.img} alt="reason-image" />
                <h2>{review.name}</h2>
                <Quote>
                  <FaQuoteLeft />
                </Quote>
                <p>{review.body}</p>
              </ReviewCard>
            ))}
          </AdWrapper2>
        </ReviewsSection>
        {/* <MapContainer>
          <h2>Where we are located</h2>
          <MapWrapper>
            <GoogleMapReact
              bootstrapURLKeys={{key:''}}
              defaultCenter={location}
              defaultZoom={17}
            >
              <HiLocationMarker />
              <p>{location.address}</p>
            </GoogleMapReact>
          </MapWrapper>
        </MapContainer> */}
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
    height: 700px;
    position: absolute;
    right: 0px;
    top: -50px;
    z-index: -50;
    filter: brightness(80%);
  }

  @media screen and (max-width: 768px) and (min-width: 486px) {
    & {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      transform: translateX(20%);
      z-index: -100;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

  h1 {
    font-weight: bolder;
  }
`;

const AdWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

const ReasonCard = styled.div`
  width: 270px;
  min-height: 270px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 7px;
  margin: 10px 0;

  img {
    width: 70px;
    height: 70px;
  }

  h2 {
    color: orangered;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const ReviewsSection = styled.div`
  min-height: 70vh;
  padding: 10px 0;

  h1 {
    font-weight: bolder;
  }
`;

const AdWrapper2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

const ReviewCard = styled.div`
  width: 270px;
  min-height: 270px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  p {
    font-style: italic;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const Quote = styled.div`
  color: orangered;
  margin: 10px 0;
`;

const MapContainer = styled.div`
  height: 80vh;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

const MapWrapper = styled.div`
  width: 100%;
`;

export default Home;
