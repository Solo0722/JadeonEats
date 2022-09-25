import React, { createContext, useState, useEffect,useContext } from "react";
import Commerce from "@chec/commerce.js";
import { useLocation } from "react-router-dom";
import { AuthenticationContext } from "./AuthContext";

export const AppContext = createContext();

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingCountry, setShippingCountry] = useState("Ghana");
  const [shippingSubdivision, setShippingSubdivision] = useState("Ashanti");
  const [shippingOption, setShippingOption] = useState("");
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState(
    JSON.parse(localStorage.getItem("deliveryAddress"))
  );
  const [shippingData, setShippingData] = useState(null);

  const { currentUser } = useContext(AuthenticationContext);

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
  }, [deliveryAddress]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const fetchSingleProduct = async (productId) => {
    const { data } = await commerce.products.retrieve(`${productId}`);
    console.log(data);
    return data;
  };

  const fetchSpecificCategory = async (category) => {
    const { data } = await commerce.products.list({
      category_slug: [`${category}`],
    });
    setProducts(data);
  };

  const fetchProductsBySearch = async (searchTerm) => {
    const { data } = await commerce.products.list({
      query: `${searchTerm}`,
    });
    setProducts(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const generateCheckoutToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });

      setCheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchShippingOption = async (checkoutTokenId) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country: "GH", region: "AH" }
    );
    console.log(options);
    setShippingOption(options[0].id);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    checkoutToken && fetchShippingOption(checkoutToken.id);
  }, [checkoutToken]);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        shippingData,
        shippingOption,
        checkoutToken,
        deliveryAddress,

        fetchCart,
        fetchProducts,

        handleAddToCart,
        handleEmptyCart,
        handleRemoveFromCart,
        handleUpdateCartQty,

        fetchShippingOption,
        fetchSpecificCategory,
        fetchProductsBySearch,
        fetchSingleProduct,

        generateCheckoutToken,
        setDeliveryAddress,
        handleCaptureCheckout,

        setShippingData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
