import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
function App() {
  return (
    <div>
      <header>
        <form>
          <Card>
            <Form>
              <Row>
                <Col md>
                  <div>
                    <h2>Blockport Testnet Faucet</h2>
                  </div>
                  <Form.Group controlId="Address">
                    <Form.Control
                      type="Address"
                      placeholder="Enter Wallet Address"
                    />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group controlId="Polygon">
                    <Form.Control type="Polygon" placeholder="Polygon" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group controlId="Polygon">
                    <Button variant="secondary">Fund me</Button>
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>
        </form>
      </header>
    </div>
  );
}

export default App;
