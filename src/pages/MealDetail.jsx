import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/Context";

const MealDetail = () => {
  const { products, handleAddToCart } = useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = products.filter((p) => p.id === id);
    setProduct(prod[0]);
  }, [id]);

  return (
    <>
      <Navbar />
      <Container>
        {!product ? (
          <Spin style={{ width: "100%" }} />
        ) : (
          <MealDetailContainer>
            <ImgContainer>
              <img src={product?.image.url} />
            </ImgContainer>
            <h2>{product.name}</h2>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              {product.categories.map((c) => (
                <p style={{ fontStyle: "italic" }}>{c.name}, </p>
              ))}
            </div>
            <p>{product.description}</p>
            <AmountWrapper>
              <h3> {product.price.formatted_with_symbol}</h3>
              <Button
                icon={<ShoppingOutlined />}
                style={{ marginTop: "-10px", zIndex: "50" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product.id, 1);
                }}
              />
            </AmountWrapper>
          </MealDetailContainer>
        )}
        <h2>More for you</h2>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  padding: 2rem 1rem;
  position: relative;
  overflow-x: hidden;
`;

const MealDetailContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
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

export default MealDetail;
