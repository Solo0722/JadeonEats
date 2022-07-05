import React, { createContext, useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { Button, List } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export const AppContext = createContext();

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const categories = [
  {
    name: "Deals",
    image: "/deals.png",
  },
  {
    name: "Breakfast",
    image: "/coffeeandtea.png",
  },
  {
    name: "Lunch",
    image: "/FastFood_BrowseHome@3x.png",
  },
  {
    name: "Supper",
    image: "/comfortfood.png",
  },
  {
    name: "Local",
    image: "/comfortfood.png",
  },
  {
    name: "Continental",
    image: "/american.png",
  },
  {
    name: "Bakery",
    image: "/bakery.png",
  },
  {
    name: "Desserts",
    image: "/dessert.png",
  },
  {
    name: "Drinks",
    image: "/coffeeandtea.png",
  },
  {
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

  useEffect(() => {
    localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
  }, [deliveryAddress]);

  //fetch products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  //fetch cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //add items to cart
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  //update quantity of cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  //remove item from cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  //empty the cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  //generating checkout token
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

  //fetching shipping country
  const fetchShippingCountry = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountry(countries.GH);
    console.log(shippingCountry);
  };

  //fetching shipping Subdivision
  const fetchShippingSubdivision = async (checkoutTokenId) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        checkoutTokenId,
        "GH"
      );
    setShippingSubdivision(subdivisions);
  };

  //fetching shipping options
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
              style={{ textAlign: "left" }}
            >
              Home
            </Button>
          </List.Item>
          {categories.map((cat) => (
            <List.Item key={cat} style={{ border: "none" }}>
              <Button
                type="text"
                block
                icon={
                  <img
                    src={cat.image}
                    width={25}
                    height={25}
                    style={{ marginRight: "10px" }}
                  />
                }
                style={{ textAlign: "left" }}
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

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        handleAddToCart,
        handleEmptyCart,
        handleRemoveFromCart,
        handleUpdateCartQty,
        renderCategoryList,
        generateCheckoutToken,
        checkoutToken,
        fetchShippingCountry,
        fetchShippingSubdivision,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
