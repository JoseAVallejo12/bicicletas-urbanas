import { axiosIntance } from '../config/AxiosConfig';

export const AlquilerRepositorio = {
  consultarAlquiler: () => axiosIntance.get(`/alquiler/listar`),
  consultarAlquilerxID: (id: number) => axiosIntance.get(`/alquiler/listar?${id}`)
};

export const servcioCrearAlquiler = async (
  cedulaUsuario: string,
  idBicicleta: string
  ): Promise<Response> => {
  const alquiler = {
    cedulaUsuario: cedulaUsuario,
    idBicicleta: idBicicleta,
    fechaAlquiler: new Date().toISOString(),
    ciudad: 'barranquilla',
    estado: true
  };
  const myHeader = new Headers();
  const url = 'http://localhost:3000/api/alquiler';
  const method = 'POST';
  myHeader.append('Content-Type', 'application/json');

  const respuesta = await fetch(url, {
    cache: 'no-cache',
    credentials: 'same-origin',
    method: method,
    headers: myHeader,
    body: JSON.stringify(alquiler)
  })

  return respuesta;
}
