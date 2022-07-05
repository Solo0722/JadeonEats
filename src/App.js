import "./App.less";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Context from "./context/Context";
import MealDetail from "./pages/MealDetail";
import Search from "./pages/Search";

function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:categoryId" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/meals/:id" element={<MealDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
