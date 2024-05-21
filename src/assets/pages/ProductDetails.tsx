import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { idProduct } = useParams();

    return <h1>Página de Detalhes do Produto {idProduct}</h1>;
};

export default ProductDetails;
