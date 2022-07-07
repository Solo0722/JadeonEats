import React, { createContext, useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { Button, List } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const categories = [
  {
    id: "",
    name: "Deals",
    image: "/deals.png",
  },
  {
    id: "cat_nPEVlNLV0oa7dM",
    name: "Breakfast",
    image: "/coffeeandtea.png",
  },
  {
    id: "cat_bWZ3l86L8okpEQ",
    name: "Lunch",
    image: "/FastFood_BrowseHome@3x.png",
  },
  {
    id: "cat_QG375vVjQ5rMOg",
    name: "Supper",
    image: "/comfortfood.png",
  },
  {
    id: "cat_0egY5eRMpl3QnA",
    name: "Local",
    image: "/comfortfood.png",
  },
  {
    id: "cat_RqEv5xLz15Zz4j",
    name: "Continental",
    image: "/american.png",
  },
  {
    id: "",
    name: "Bakery",
    image: "/bakery.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Desserts",
    image: "/dessert.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Drinks",
    image: "/coffeeandtea.png",
  },
  {
    id: "cat_8XxzoB8qglPQAZ",
    name: "Snacks",
    image: "/icecreamandyogort.png",
  },
];

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

  const renderCategoryList = () => {
    return (
      <>
        <List bordered={false}>
          <List.Item style={{ border: "none" }}>
            <Button
              icon={<HomeOutlined style={{ marginRight: "10px" }} />}
              type="text"
              block
              href="/menu"
              style={{
                textAlign: "left",
                borderLeft: `${
                  location.pathname === "/menu" ? "2px solid orangered" : ""
                }`,
                opacity: `${location.pathname === "/menu" ? "1" : "0.7"}`,
                fontWeight: `${location.pathname === "/menu" ? "bold" : ""}`,
              }}
            >
              Home
            </Button>
          </List.Item>
          {categories.map((cat) => (
            <List.Item key={cat.name} style={{ border: "none" }}>
              <Button
                type="text"
                block
                href={`/menu/${cat.name.toLowerCase()}`}
                icon={
                  <img
                    src={cat.image}
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                }
                style={{
                  textAlign: "left",
                  borderLeft: `${
                    location.pathname === `/menu/${cat.name.toLowerCase()}`
                      ? "2px solid orangered"
                      : ""
                  }`,
                  opacity: `${
                    location.pathname === `/menu/${cat.name.toLowerCase()}`
                      ? "1"
                      : "0.7"
                  }`,
                  fontWeight: `${
                    location.pathname === `/menu/${cat.name.toLowerCase()}`
                      ? "bold"
                      : ""
                  }`,
                }}
              >
                {cat.name}
              </Button>
            </List.Item>
          ))}
        </List>
        <Button
          href="/login"
          type="primary"
          block
          style={{ marginTop: "30px" }}
        >
          Login/Sign up
        </Button>
      </>
    );
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
        
        renderCategoryList,
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
