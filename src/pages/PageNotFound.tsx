import { Container, Image } from "react-bootstrap";

import N404 from "../assets/images/404.jpg";

const YourComponent = () => {
    return (
        <Container>
            <div
                style={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    src={N404}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
            </div>
        </Container>
    );
};

export default YourComponent;
