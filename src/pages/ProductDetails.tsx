import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { getProductById } from "../services/productServices";

const ProductDetails = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (idProduct) {
            const fetchProduct = async () => {
                try {
                    const productData = await getProductById(idProduct);
                    setProduct(productData);
                } catch (error) {
                    console.error("Falha ao carregar o produto", error);
                }
            };

            fetchProduct();
        }
    }, [idProduct]);

    if (!product) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <>
            <h1>{product.name}</h1>
            <p>Preço: R$ {product.price},00</p>
        </>
    );
};

export default ProductDetails;
