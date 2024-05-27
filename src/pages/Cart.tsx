import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import "../css/Cart.css";
import { Container, Col, Row, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useAuth();

    // Calcula o preço total do carrinho
    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotalPrice(total);
    };

    // Atualiza o preço total sempre que o carrinho for atualizado
    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    return (
        <Container className="mb-5">
            <Row className="mt-5 d-flex align-items-center">
                <Col xs={8} className="mt-5 d-flex flex-column px-5 gap-3">
                    {cart.map((item) => (
                        <Row className="d-flex">
                            <Col xs={9}>
                                <div className="item-name">{item.name}</div>
                            </Col>
                            <Col
                                xs={3}
                                className="d-flex align-items-start justify-content-end gap-1"
                            >
                                <Nav.Link
                                    className="fw-bold text-danger m-1 align-self-start"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remover
                                </Nav.Link>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const newValue = parseInt(e.target.value);
                                       
                                        if (newValue >= 1) {
                                            updateQuantity(item.id, newValue);
                                        } else {
                                            
                                            updateQuantity(item.id, 1);
                                        }
                                    }}
                                    className="quantity-input"
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col className="mt-5 border d-flex flex-column p-4" xs={4}>
                    <h2>Pedidos</h2>
                    <hr />
                    <p className="text-end">Produtos</p>
                    {cart.map((item) => (
                        <div className="d-flex justify-content-between">
                            <span>+</span>
                            <span>${item.price * item.quantity}</span>
                        </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span>TOTAL</span>
                        <span className="total-price">
                            R$ {totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button
                        className="buy-button"
                        onClick={() => {
                            if (totalPrice != 0) {
                                if (user) {
                                    cart.map((item) => removeFromCart(item.id));
                                    alert("Pedido realizado com sucesso");
                                } else {
                                    alert("Faça login para finalizar a compra");
                                    navigate("/login");
                                }
                            } else {
                                alert(
                                    "Ponha algo no carrinho antes de efetuar uma compra"
                                );
                                navigate("/");
                            }
                        }}
                    >
                        Comprar
                    </button>
                </Col>
            </Row>
        </Container>
    );
};
