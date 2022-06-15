import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Empty, List, Spin } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/Context";

// const meals = [
//   {
//     name: "Fried rice and chicken",
//     price: "20.00",
//     rating: 4.8,
//     img: "",
//   },
//   {
//     name: "Pepperoni Pizza",
//     price: "45.00",
//     rating: 4.2,
//     img: "",
//   },
//   {
//     name: "Fufu and Groundnut soup",
//     price: "30.00",
//     rating: 4.9,
//     img: "",
//   },
//   {
//     name: "Jollof rice and sausage",
//     price: "10.00",
//     rating: 4.1,
//     img: "",
//   },
// ];

const Cart = () => {
  const { cart, handleRemoveFromCart, handleEmptyCart, handleUpdateCartQty } =
    useContext(AppContext);

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
          <Button
            type="primary"
            style={{ background: "red", border: "none" }}
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
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
          <List>
            <List.Item>
              <OrderLayout>
                <span>Subtotal</span>
                <span>{cart.subtotal.formatted_with_symbol}</span>
              </OrderLayout>
            </List.Item>
            <List.Item>
              <OrderLayout>
                <span>Delivery Fee</span>
                <span>$2.00</span>
              </OrderLayout>
            </List.Item>
            <List.Item>
              <OrderLayout>
                <span style={{ fontWeight: "bold", color: "#fff" }}>
                  Order total
                </span>
                <span style={{ fontWeight: "bold", color: "#fff" }}>
                  {cart.subtotal.formatted_with_symbol}
                </span>
              </OrderLayout>
            </List.Item>
          </List>
          <Button
            block
            type="primary"
            style={{ marginTop: "15px" }}
            href={"/checkout"}
          >
            Checkout
          </Button>
          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            href="/menu"
            style={{ marginTop: 20 }}
          >
            Continue Shopping
          </Button>
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
  /* padding: 30px; */
  min-height: calc(100vh - 65px);
  overflow-x: hidden;
`;

const FilledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CartItemsContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const OrderContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const OrderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default Cart;
