import {
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button, Divider, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { AppContext } from "../context/Context";
import SkeletonAnimation from "../utils/skeleton";

const MealDetail = () => {
  const { products, handleAddToCart, fetchSpecificCategory } =
    useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = products.filter((p) => p.id === id);
    setProduct(prod[0]);
  }, [id]);

  useEffect(() => {
    fetchSpecificCategory(product?.categories[0].name);
  }, [id, product]);

  return (
    <>
      <Navbar />
      <MenuContainer>
        <SideBar />
        <Wrapper>
          {!product ? (
            <Spin style={{ width: "100%" }} />
          ) : (
            <MealDetailContainer>
              <ImgContainer>
                <img src={product?.image.url} />
              </ImgContainer>
              <h2 style={{ fontWeight: "bold" }}>{product.name}</h2>
              <div
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
              >
                {product.categories.map((c) => (
                  <p style={{ fontStyle: "italic" }}>{c.name}, </p>
                ))}
              </div>

              <AmountWrapper>
                <h3> {product.price.formatted_with_symbol}</h3>

                <Button
                  icon={<ShoppingOutlined />}
                  type="primary"
                  style={{ marginTop: "-10px", zIndex: "50" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product.id, 1);
                  }}
                >
                  Add to cart
                </Button>
              </AmountWrapper>
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sed numquam a recusandae magnam amet quas doloribus? Sequi vero
                voluptas quisquam voluptatibus voluptatem et modi cum quo!
                Asperiores, sunt assumenda.
              </p>
            </MealDetailContainer>
          )}
          <Divider />
          <MoreContainer>
            <h2>More for you</h2>
            <MealsContainer>
              {!products ? (
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
          </MoreContainer>
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
  padding: 5px 20px;

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      margin-left: 0;
    }
  }
`;

const MealDetailContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AmountWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MoreContainer = styled.div`
  margin-top: 20px;

  h2 {
    text-align: center;
    font-weight: bolder;
  }
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default MealDetail;
