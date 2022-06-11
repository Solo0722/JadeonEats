import React from "react";
import { Button, Card, Skeleton, Typography } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import styled from "styled-components";

const MealCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{
        width: 250,
        margin: "10px",
        background: "#181820",
      }}
    >
      <ImgContainer>
        <img src={product.image.url} width={"100%"} />
      </ImgContainer>
      <TitleContainer>
        <p>{product.name}</p>
        <p> {product.price.formatted_with_symbol}</p>
      </TitleContainer>
      <DescriptionContainer></DescriptionContainer>
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
`;

export default MealCard;
