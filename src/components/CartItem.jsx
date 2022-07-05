import { StarFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <CartItemContainer>
      <Wrapper>
        <ImgContainer>
          <img src={item.image.url} width={"100%"} height={"100%"} />
        </ImgContainer>
        <ItemDetailsContainer>
          <h3>{item.name}</h3>
          <Button.Group>
            <Button
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Button>{item.quantity}</Button>
            <Button
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </Button.Group>
        </ItemDetailsContainer>
      </Wrapper>
      <AmountContainer>
        <p>{item.line_total.formatted_with_symbol}</p>
        <Button type="link" onClick={() => handleRemoveFromCart(item.id)}>
          Remove
        </Button>
      </AmountContainer>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
const ItemDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
    margin-top: 10px;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
  }
`;

export default CartItem;
