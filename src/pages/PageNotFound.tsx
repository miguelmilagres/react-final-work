import { Container, Image } from "react-bootstrap";

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
                    src="src/assets/images/404.jpg"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
            </div>
        </Container>
    );
};

export default YourComponent;
