import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import RegistroPrestador from "./RegistroPrestador";
import SeccionNoticias from "./SeccionNoticias";

const Login = (props) => {

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Registro de prestadores</h2>
          <RegistroPrestador />
        </Col>
        <Col md={6}>
          <h2>Noticias Emssanar Eps S.A.S</h2>
          <SeccionNoticias />
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
