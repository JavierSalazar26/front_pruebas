import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import CreateApis from "../utils/CrearApis";
import Swal from "sweetalert2";

const ModalRegister = ({ show, handleClose }) => {
  const [valoresIniciales, setValoresIniciales] = useState({
    id_user: undefined,
    nombres: undefined,
    apellidos: undefined,
  });

  const handleChange = (e) => {
    setValoresIniciales({
      ...valoresIniciales,
      [e.target.name]: e.target.value,
    });
  };
  const enviarDatos = (e) => {
    e.preventDefault();
    const envioBackend = {
      ...valoresIniciales,
    };
    CreateApis.CrearUsuarios(envioBackend).then((respuesta) => {
      Swal.fire({
        icon: "success",
        title: "Se registro el usuario con exitó",
      }).then((result) => {
        if (result.isConfirmed) {
            setValoresIniciales({});
        }
      });
    });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={enviarDatos}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Registrar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Número de identificación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1085333333"
                  autoFocus
                  name="id_user"
                  value={valoresIniciales.id_user || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fulanito"
                  name="nombres"
                  value={valoresIniciales.nombres || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="De tal"
                  name="apellidos"
                  value={valoresIniciales.apellidos || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

ModalRegister.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalRegister;
