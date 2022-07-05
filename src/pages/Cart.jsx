import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Empty, List, Spin } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/Context";

const Cart = () => {
  const {
    cart,
    handleRemoveFromCart,
    handleEmptyCart,
    handleUpdateCartQty,
    fetchCart,
  } = useContext(AppContext);

  

  const EmptyCart = () => {
    return (
      <Empty description="No items in cart">
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          href="/menu"
          style={{ marginTop: 20 }}
        >
          Continue Shopping
        </Button>
      </Empty>
    );
  };

  const FilledCart = () => {
    return (
      <FilledCartContainer>
        <TitleContainer>
          <h2>Shopping Cart</h2>
          <h2>Subtotal : {cart.subtotal.formatted_with_symbol}</h2>
        </TitleContainer>
        <CartItemsContainer>
          <List>
            {cart.line_items.map((item) => (
              <List.Item>
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              </List.Item>
            ))}
          </List>
        </CartItemsContainer>
        <OrderContainer>
          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            href="/menu"
            style={{ marginTop: 20 }}
          >
            Continue Shopping
          </Button>
          <div>
            <Button
              // block
              type="primary"
              href={"/checkout"}
              style={{ marginRight: "20px" }}
            >
              Checkout
            </Button>
            <Button
              type="primary"
              style={{ background: "red", border: "none" }}
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
          </div>
        </OrderContainer>
      </FilledCartContainer>
    );
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        {!cart.line_items ? (
          <Spin />
        ) : !cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <FilledCart />
        )}
      </CartContainer>
    </>
  );
};

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 65px);
  overflow-x: hidden;
`;

const FilledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
const CartItemsContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const OrderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default Cart;
