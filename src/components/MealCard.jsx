import React,{useEffect,useState} from "react";
import { Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MealCard = ({ product, handleAddToCart }) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      className="mealcard"
      onClick={() => navigate(`/meals/${product.id}`)}
    >
      <CardMedia>
        <img
          src={product.image.url}
          width={"100%"}
          height={"100%"}
          style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
        />
      </CardMedia>
      <CardHeader>
        <p style={{ fontWeight: "bold" }}>{product.name}</p>
      </CardHeader>
      <CardBody>
        <p> {product.price.formatted_with_symbol}</p>
        <Button
          icon={<ShoppingOutlined />}
          style={{ marginTop: "-10px", zIndex: "50" }}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product.id, 1);
          }}
        />
      </CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 270px;
  margin: 10px 0px;
  height: 250px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  border-radius: 5px;

  &:hover {
    transform: scale(1.01);
  }
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
`;

export default MealCard;
