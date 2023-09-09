import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Buscador = ({ onSubmit }) => {
  const [findValue, setFindValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(findValue)
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={10} sm={5}> 
          <Form className="formulario" onSubmit={handleSubmit}>
            <Form.Group controlId="">
              <Form.Label>
                <p>Buscador de personajes</p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Personaje"
                value={findValue}
                onChange={(e) => setFindValue(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Buscador