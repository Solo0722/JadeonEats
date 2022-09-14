import "./App.less";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Context from "./context/Context";
import MealDetail from "./pages/MealDetail";
import Search from "./pages/Search";
import AuthContext from "./context/AuthContext";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <AuthContext>
        <Context>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/meals/:id" element={<MealDetail />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Context>
      </AuthContext>
    </Router>
  );
}

export default App;
