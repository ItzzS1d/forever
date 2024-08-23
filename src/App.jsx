import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Login from "./pages/Auth/Login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Placeorder from "./pages/Placeorder";
import Nav from "./components/Nav";
import { useState } from "react";
import Signup from "./pages/Auth/Signup";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-screen-lg  mx-2 md:mx-auto">
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/collection"
          element={<Collection search={search} setSearch={setSearch} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/placeorder" element={<Placeorder />} />
      </Routes>
    </div>
  );
};

export default App;
