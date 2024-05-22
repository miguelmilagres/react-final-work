import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import { Link } from "react-router-dom";
import { Product } from "../types";

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Falha ao listar os produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Produtos:</h1>
            <input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product-details/${product.id}`}>
                            {product.name} - R$ {product.price},00
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
