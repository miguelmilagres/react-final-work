import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Details from "./assets/pages/ProductDetails";
import PageNotFound from "./assets/pages/PageNotFound";
import Cart from "./assets/pages/Cart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product-details/:idProduct"
                    element={<Details />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
