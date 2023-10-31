import APIInvoker from "./conectBakend";
import navegacion from "./navegacion";

class CreateApis {
  // función para crear un usuario
  CrearUsuarios(data) {
    return new Promise((respuesta, error) => {
      APIInvoker.invokePOST(
        navegacion.crearUsuarios,
        data,
        (res) => {
          respuesta(res);
        },
        (err) => {
          error(err);
        }
      );
    });
  }

  // función para listar los departamentos
  ListarDepartamentos() {
    return new Promise((respuesta, error) => {
      APIInvoker.invokeGET(
        navegacion.buscarDepartamentos,
        (res) => {
          respuesta(res);
        },
        (err) => {
          error(err);
        }
      );
    });
  }

  // funcion para listar las ciudades
  ListarCiudades() {
    return new Promise((respuesta, error) => {
      APIInvoker.invokeGET(
        navegacion.buscarCiudades,
        (res) => {
          respuesta(res);
        },
        (err) => {
          error(err);
        }
      );
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CreateApis();
