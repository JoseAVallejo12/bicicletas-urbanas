import {
  LISTAR_ALQUILER,
  TiposAccionesAlquiler,
} from '../../acciones/alquiler/AlquilerTiposAcciones';
import { EstadoAlquiler } from '../../modelo/EstadoAlquiler';
import { Alquiler } from '../../../../feature/Producto/models/Alquiler';

const initialState: EstadoAlquiler = {
  alquiler: Array<Alquiler>(),
};

export default function (
  state = initialState,
  action: TiposAccionesAlquiler,
): EstadoAlquiler {
  switch (action.type) {
    case LISTAR_ALQUILER: {
      const alquiler = action.payload;
      return {
        ...state,
        alquiler,
      };
    }
    default:
      return state;
  }
}
