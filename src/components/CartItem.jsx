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
          <p>{item.name}</p>
          {/* <span>
            <StarFilled />
            {meal.rating}
          </span> */}
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
  /* padding: 10px; */
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: #181820;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;
const ItemDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  /* span {
    margin-top: 50%;
    text-align: right;
  } */

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: 5px 0;
      width: 100%;
    }
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;

  button {
    margin-top: 100%;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      width: 100%;
    }
    button {
      margin-top: -15px;
    }
  }
`;

export default CartItem;
