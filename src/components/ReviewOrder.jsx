import { List } from "antd";
import React from "react";
import styled from "styled-components";

const ReviewOrder = ({ checkoutToken }) => {
  return (
    <OrderContainer>
      <h2 style={{ fontWeight: "bolder" }}>Order Summary</h2>
      <List style={{ margin: "20px 0" }}>
        {checkoutToken?.live.line_items.map((product) => (
          <List.Item key={product.name}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>{product.name}</h4>
              <p style={{opacity:"0.7"}}>Quantity: {product.quantity}</p>
            </div>

            <p>{product.line_total.formatted_with_symbol}</p>
          </List.Item>
        ))}
        <List.Item>
          <h3 style={{ fontWeight: "bold" }}>Total</h3>
          <p style={{ fontWeight: "bold" }}>
            {checkoutToken?.live.subtotal.formatted_with_symbol}
          </p>
        </List.Item>
      </List>
    </OrderContainer>
  );
};

const OrderContainer = styled.div``;

export default ReviewOrder;
