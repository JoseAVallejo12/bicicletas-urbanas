import { axiosIntance } from '../config/AxiosConfig';

export const BicicletaRepositorio = {
  consultarBicicletas: () => axiosIntance.get('/bicicleta/listar'),
  consultarBicicleta: (id: number) => axiosIntance.get(`/bicicleta/listar/?${id}`),
  actualizarEstado: (dato: object) => axiosIntance.put('/bicicleta', dato)
};
