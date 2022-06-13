import React from "react";
import { Button, Card, Skeleton, Typography } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import styled from "styled-components";

const MealCard = ({ product, handleAddToCart }) => {
  return (
    // <Card
    //   hoverable
    //   style={{
    //     width: 250,
    //     margin: "10px",
    //     padding: 0,
    //     background: "#181820",
    //   }}
    // >
    //   <ImgContainer>
    //     <img src={product.image.url} width={"100%"} />
    //   </ImgContainer>
    //   <TitleContainer>
    //     <p>{product.name}</p>
    //     <p> {product.price.formatted_with_symbol}</p>
    //   </TitleContainer>
    //   <DescriptionContainer></DescriptionContainer>
    // </Card>
    <Card
      hoverable
      // bordered={false}
      style={{
        width: 250,
        margin: "10px",
        padding: 0,
        background: "#181820",
      }}
    >
      <ImgContainer>
        <img src={product.image.url} width={"100%"} />
      </ImgContainer>
      <TitleContainer>
        <p>{product.name}</p>
      </TitleContainer>
      <DescriptionContainer>
        <p>
          <StarFilled style={{ color: "gold" }} /> <span>{product.rating}</span>
        </p>
        <p> GHC{product.price.formatted_with_symbol}</p>
        <Button
          icon={<ShoppingOutlined />}
          style={{ marginTop: "-10px" }}
          onClick={() => handleAddToCart(product.id, 1)}
        />
      </DescriptionContainer>
    </Card>
  );
};

const ImgContainer = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.5);
`;

export default MealCard;
