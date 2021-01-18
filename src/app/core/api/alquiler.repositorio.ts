import { axiosIntance } from '../config/AxiosConfig';

export const AlquilerRepositorio = {
  consultarAlquiler: () => axiosIntance.get(`/alquiler/listar`),
  consultarAlquilerxID: (id: number) => axiosIntance.get(`/alquiler/listar?${id}`)
};
