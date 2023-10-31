import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Col } from "react-bootstrap";
import CrearApis from "../utils/CrearApis";
import Swal from "sweetalert2";

const RegistroPrestador = (props) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [valoresIniciales, setValoresIniciales] = useState({
    nit: undefined,
    codigo_habilitacion: undefined,
    nombre_prestador: undefined,
    id_departamento: undefined,
    id_ciudad: undefined,
  });

  useEffect(() => {
    CrearApis.ListarDepartamentos().then((departamentos) => {
      setDepartamentos(departamentos);
    });

    CrearApis.ListarCiudades().then((ciudad) => {
      setCiudades(ciudad);
    });
  }, []);

  const ciudadesFilter = ciudades.filter(i => i.id_departamento === valoresIniciales.id_departamento);
  console.log(ciudadesFilter, 'Ciudades filtradas');


  function handleChange(event) {
    setValoresIniciales({
      ...valoresIniciales,
      [event.target.name]: event.target.value,
    });
  }

  function enviarBackend(event) {
    event.preventDefault();
    const enviarBackend = {
      ...valoresIniciales,
    };

    CrearApis.CrearUsuarios(enviarBackend).then((respuesta) => {
      Swal.fire({
        icon: "success",
        title: "Se registro el usuario con exitó",
      }).then((result) => {
        if (result.isConfirmed) {
            setValoresIniciales({});
        }
      });
    });
  }

  return (
    <Form onSubmit={enviarBackend}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nit</Form.Label>
        <Form.Control
          type="number"
          placeholder="Nit"
          name="nit"
          value={valoresIniciales.nit || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Código habilitación</Form.Label>
        <Form.Control
          type="number"
          placeholder="Código habilitación"
          name="codigo_habilitacion"
          value={valoresIniciales.codigo_habilitacion || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre prestador</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre prestador"
          name="nombre_prestador"
          value={valoresIniciales.nombre_prestador || ""}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Departamento:</Form.Label>
        <Form.Select
          custom
          name="id_departamento"
          value={valoresIniciales.id_departamento || ""}
          onChange={handleChange}
          required
        >
          <option value={""}>Seleccione...</option>
          {departamentos.map((respuesta, index) => (
            <option
              value={respuesta.id_departamento}
              key={respuesta.id_departamento}
            >
              {respuesta.departamento}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Ciudad:</Form.Label>
        <Form.Select
          custom
          name="id_ciudad"
          value={valoresIniciales.id_ciudad || ""}
          onChange={handleChange}
          required
        >
          <option value={""}>Seleccione...</option>
          {ciudades.map((ciudad) => (
            <option value={ciudad.id_ciudad} key={ciudad.id_ciudad}>
              {ciudad.nombre_ciudad}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Subir archivo:</Form.Label>
        <Form.Control type="file" placeholder="Nombre prestador" accept="application/pdf,application/vnd.ms-excel"/>
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
