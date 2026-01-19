import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const myName = "Nassim";

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          {/*bootstrap card and style*/}
          <Card
            style={{
              width: "26rem",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "300px",
                overflow: "hidden",
                marginTop: "10px",
              }}
            >
              <Image />
            </div>

            <Card.Body className="text-center p-4">
              <Card.Title
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                <Name />
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                <Description />
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#2a9d8f",
                }}
              >
                <Price />
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Message et image conditionnelle */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {myName ? `Hello, ${myName}` : "Hello, there !"}
            </div>

            {myName && (
              <img
                src="/public/kakachi.webp"
                alt="Hello"
                style={{ width: "150px", height: "auto" }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
