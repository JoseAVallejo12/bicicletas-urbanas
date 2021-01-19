import {
  LISTAR_BICICLETA,
  TiposAccionesBicicleta,
} from './bicicletaTiposAcciones';
import { Bicicleta } from '../../../../feature/Bicicleta/models/Bicicleta';
import { BicicletaRepositorio } from '../../../api/bicicleta.repositorio';

export function listarBicicleta (
  bicicleta: Array<Bicicleta>,
): TiposAccionesBicicleta {
  return {
    type: LISTAR_BICICLETA,
    payload: bicicleta,
  };
}

export function listarBicicletaAsync() {
  return function (dispacth: any) {
    BicicletaRepositorio.consultarBicicletas().then((respuesta: any) => {
      console.log("desde la api bicicleta", respuesta);
      dispacth(
        listarBicicleta(respuesta.data)
      )
      });
  };
}
