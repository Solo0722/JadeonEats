import React from "react";
import { Button, Card, Skeleton, Typography } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import styled from "styled-components";

const MealCard = ({ product, handleAddToCart }) => {
  return (
    <CardContainer>
      <CardMedia>
        <img src={product.image.url} width={"100%"} height={"100%"} />
      </CardMedia>
      <CardHeader>
        <p>{product.name}</p>
      </CardHeader>
      <CardBody>
        {/* <p>
          <StarFilled style={{ color: "gold" }} /> <span>{product.rating}</span>
        </p> */}
        <p> {product.price.formatted_with_symbol}</p>
        <Button
          icon={<ShoppingOutlined />}
          style={{ marginTop: "-10px" }}
          onClick={() => handleAddToCart(product.id, 1)}
        />
      </CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 300px;
  margin: 10px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background: #181820;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.01);
  }
  /* @media screen and (max-width: 768px) {
    width: 40%;
  } */
`;
const CardMedia = styled.div`
  width: 100%;
  height: 60%;
`;
const CardHeader = styled.div`
  margin-top: 5px;
  padding: 0 10px;
`;

const CardBody = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.5);
`;

export default MealCard;
