import React, { useContext } from "react";
import styled from "styled-components";
import DeliveryAddressForm from "../components/DeliveryAddressForm";
import { ToolsContainer } from "../components/Navbar";
import { Button, Carousel } from "antd";
import Footer from "../components/Footer";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import SwitchTheme from "../components/SwitchTheme";
import { UserOutlined } from "@ant-design/icons";

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
      <HomeContainer>
        <LandingContainer>
          <Nav>
            <img src="/salad.png" alt="logo" width={25} height={25} />

            <ToolsContainer>
              <Button
                type="primary"
                shape="round"
                onClick={() => navigate("/auth")}
              >
                Sign in
              </Button>
            </ToolsContainer>
          </Nav>
          <BodyWrapper>
            <h1>
              Order <span style={{ color: "orangered" }}>food</span> to your
              door.
            </h1>
            <p>
              Get served with the best quality local and continental delicacies.
            </p>
            <DeliveryAddressForm />
          </BodyWrapper>
        </LandingContainer>
        {/* <AdvertContainer>
          <AdWrapper>
            {reasons.map((reason, i) => (
              <ReasonCard key={i}>
                <img src={reason.img} alt="reason-image" />
                <h2>{reason.title}</h2>
              </ReasonCard>
            ))}
          </AdWrapper>
        </AdvertContainer> */}
        {/* <ReviewsSection>
          <h1>Our Customers say</h1>
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
        </ReviewsSection> */}
      </HomeContainer>
      <Footer />
    </>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("/bak.jpg"),
    linear-gradient(to left, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  h1 {
    font-size: 3.5rem;
    font-weight: bolder;
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
    color: #fff;
    animation: fadeIn 1s ease-in both;
  }

  p {
    text-align: center;
    color: #ddd;
    animation: fadeIn 1s ease-in both;
    animation-delay: 1s;
  }

  input::placeholder {
    font-size: 0.8rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
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

const BodyWrapper = styled.div`
  width: 60%;
  margin: auto;

  @media screen and (max-width: 768px) {
    & {
      width: 90%;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 7px;
  margin: 10px 0;

  img {
    width: 170px;
    height: 170px;
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
