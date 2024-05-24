import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import About from "./pages/About";
import MyNavBar from "./components/MyNavBar";
import Registro from "./pages/Registro";
import Profile from "./pages/Profile"; // Importar o componente de perfil
import { AuthProvider } from "./services/AuthContext";

function App() {
    return (
        <AuthProvider>
            <MyNavBar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-details/:idProduct" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/about" element={<About />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/profile" element={<Profile />} /> {/* Adicionar a nova rota */}
            </Routes>
        </AuthProvider>
    );
}

export default App;
