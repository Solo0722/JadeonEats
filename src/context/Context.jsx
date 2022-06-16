import React, { createContext, useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import { Button, List } from "antd";

export const AppContext = createContext();

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const categories = [
    "Breakfast",
    "Lunch",
    "Supper",
    "Snacks",
    "Desserts",
    "Continental",
    "Local",
  ];

  // console.log(products);
  // console.log(cart);

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

  const renderCategoryList = () => {
    return (
      <List bordered={false}>
        {categories.map((cat) => (
          <List.Item>
            <Button type="text" block style={{ textAlign: "left" }}>
              {cat}
            </Button>
          </List.Item>
        ))}
      </List>
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
