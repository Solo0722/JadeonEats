import React, { createContext, useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { auth, google_provider } from "../utils/firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const Context = ({ children }) => {
  const navigate = useNavigate();

  //states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingCountry, setShippingCountry] = useState("Ghana");
  const [shippingSubdivision, setShippingSubdivision] = useState("Ashanti");
  const [shippingOption, setShippingOption] = useState("");
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [shippingData, setShippingData] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState(
    JSON.parse(localStorage.getItem("deliveryAddress"))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  //functions
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

  const signInWithGoogle = () => {
    signInWithPopup(auth, google_provider)
      .then((result) => {
        setCurrentUser(result.user);
        navigate("/menu");
      })
      .catch((err) => {
        message.error("Sign in failed.Try again!");
      });
  };

  const signUpUser = (formData) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((cred) => {
        setCurrentUser(cred.user);
        navigate("/menu");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const signInUser = (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((cred) => {
        setCurrentUser(cred.user);
        navigate("/menu");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        message.success("User logged out successfully");
        setCurrentUser(null);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  //useEffects

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    checkoutToken && fetchShippingOption(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
  }, [deliveryAddress]);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        shippingData,
        shippingOption,
        checkoutToken,
        deliveryAddress,
        currentUser,

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

        signInWithGoogle,
        signUpUser,
        logoutUser,
        signInUser,

        setShippingData,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
