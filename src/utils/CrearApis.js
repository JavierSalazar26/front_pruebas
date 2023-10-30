import APIInvoker from "./conectBakend";
import navegacion from "./navegacion";

class CreateApis {
    // función para crear un usuario
    CrearUsuarios(data) {
        return new Promise((resolve, reject) => {
            APIInvoker.invokePOST(navegacion.crearUsuarios, data, (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CreateApis();