import React, { useContext } from "react";
import styled from "styled-components";
import { Input, Button, Form, Divider } from "antd";
import { AppContext } from "../context/Context";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ReviewOrder from "./ReviewOrder";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentDetails = ({ prev, next }) => {
  const { checkoutToken, shippingData, shippingOption, handleCaptureCheckout } =
    useContext(AppContext);

  const navigate = useNavigate();

  const onFinish = async (values, elements, stripe) => {
    console.log("Success:", values);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Error:", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.delivery_address,
          town_city: shippingData.delivery_address,
          county_state: "AH",
          postal_zip_code: "AK-039-5028",
          country: "GH",
        },
        fulfillment: {
          shipping_method: shippingOption,
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: "4242424242424242",
            expiry_month: "02",
            expiry_year: "24",
            cvc: "123",
            postal_zip_code: "94107",
          },
        },
      };
      console.log(orderData);
      handleCaptureCheckout(checkoutToken.id, orderData);
      next();
      navigate("/success");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const cashOnDeliveryOrder = () => {
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstname,
        lastname: shippingData.lastname,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.delivery_address,
        town_city: shippingData.delivery_address,
        county_state: "AH",
        postal_zip_code: "AK-039-5028",
        country: "GH",
      },
      fulfillment: {
        shipping_method: shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242424242424242",
          expiry_month: "02",
          expiry_year: "24",
          cvc: "123",
          postal_zip_code: "94107",
        },
      },
    };
    console.log(orderData);
    handleCaptureCheckout(checkoutToken.id, orderData);
    navigate("/success");
  };

  return (
    <PaymentDetailsContainer>
      <ReviewOrder checkoutToken={checkoutToken} />
      <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
        Payment Method
      </h2>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={(e) => onFinish(e, elements, stripe)}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: "100%" }}
            >
              <CardElement />
              <br />
              <Form.Item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Button onClick={() => prev()}>Back</Button>
                  <Button type="primary" htmlType="submit">
                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          )}
        </ElementsConsumer>
      </Elements>
      <Divider />
      <p style={{ textAlign: "center" }}>or</p>
      <Button
        block
        style={{ background: "blue", color: "#fff", borderColor: "blue" }}
        onClick={cashOnDeliveryOrder}
      >
        Cash on Delivery
      </Button>
    </PaymentDetailsContainer>
  );
};

const PaymentDetailsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 8px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export default PaymentDetails;
