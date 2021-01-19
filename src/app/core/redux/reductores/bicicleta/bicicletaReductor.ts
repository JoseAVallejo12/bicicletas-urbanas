import {
  LISTAR_BICICLETA,
  TiposAccionesBicicleta,
} from '../../acciones/bicicleta/bicicletaTiposAcciones';
import { EstadoBicicleta } from '../../modelo/estadoBicicleta';
import { Bicicleta } from '../../../../feature/Bicicleta/models/Bicicleta';

const initialState: EstadoBicicleta = {
  bicicleta: Array<Bicicleta>(),
};

export default function (
  state = initialState,
  action: TiposAccionesBicicleta,
): EstadoBicicleta {
  console.log("este es el action", action);
  switch (action.type) {
    case LISTAR_BICICLETA: {
      const bicicleta = action.payload;
      return {
        ...state,
        bicicleta,
      };
    }
    default:
      return state;
  }
}
