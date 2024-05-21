import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
    return (
        <>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
            <Link to="/cart">Cart</Link> | <Link to="/about">Sobre</Link> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product-details/:idProduct"
                    element={<Details />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
