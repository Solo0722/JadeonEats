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
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOption, setShippingOption] = useState("");

  const [deliveryAddress, setDeliveryAddress] = useState(
    JSON.parse(localStorage.getItem("deliveryAddress"))
  );

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

  const fetchSpecificCategory = async (category) => {
    const { data } = await commerce.products.list({
      category_slug: [`${category}`],
    });
    console.log(data);
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

  const fetchShippingCountry = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountry(countries.GH);
    console.log(shippingCountry);
  };

  const fetchShippingSubdivision = async (checkoutTokenId) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        checkoutTokenId,
        "GH"
      );
    setShippingSubdivision(subdivisions);
  };

  const fetchShippingOption = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOption(options[0].id);
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
                opacity: `${location.pathname === "/menu/" ? "1" : "0.7"}`,
              }}
            >
              Home
            </Button>
          </List.Item>
          {categories.map((cat) => (
            <List.Item key={cat} style={{ border: "none" }}>
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

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        fetchCart,
        fetchProducts,
        handleAddToCart,
        handleEmptyCart,
        handleRemoveFromCart,
        handleUpdateCartQty,
        renderCategoryList,
        generateCheckoutToken,
        checkoutToken,
        fetchShippingCountry,
        fetchShippingSubdivision,
        fetchShippingOption,
        deliveryAddress,
        setDeliveryAddress,
        fetchSpecificCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
