import {
  LISTAR_ALQUILER,
  TiposAccionesAlquiler,
} from './AlquilerTiposAcciones';
import { Alquiler } from 'app/feature/Producto/models/Alquiler';
import { AlquilerRepositorio } from 'app/core/api/alquiler.repositorio';

export function listarAlquiler(
  alquiler: Array<Alquiler>,
): TiposAccionesAlquiler {
  return {
    type: LISTAR_ALQUILER,
    payload: alquiler,
  };
}

export function listarAlquilerAsync() {
  return function (dispacth: any) {
    AlquilerRepositorio.consultarAlquiler().then((respuesta: any) =>
      dispacth(
        listarAlquiler(respuesta.data)
      )
    );
  };
}
