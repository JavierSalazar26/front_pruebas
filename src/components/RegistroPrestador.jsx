import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Col } from "react-bootstrap";

const RegistroPrestador = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nit</Form.Label>
        <Form.Control type="number" placeholder="Nit" />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Código habilitación</Form.Label>
        <Form.Control type="number" placeholder="Código habilitación" />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre prestador</Form.Label>
        <Form.Control type="text" placeholder="Nombre prestador" />
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Departamento:</Form.Label>
        <Form.Select custom>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion4">Opción 4</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Ciudad:</Form.Label>
        <Form.Select custom>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion4">Opción 4</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Subir archivo:</Form.Label>
        <Form.Control type="file" placeholder="Nombre prestador" />
      </Form.Group>
      <Col className="py-3">
        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Col>
    </Form>
  );
};

RegistroPrestador.propTypes = {};

export default RegistroPrestador;
