import { Bicicleta } from '../../../../feature/Bicicleta/models/Bicicleta';

export const LISTAR_BICICLETA = 'LISTAR_BICICLETA';

interface AccionListarBicicleta {
  type: typeof LISTAR_BICICLETA;
  payload: Bicicleta[];
}

export type TiposAccionesBicicleta = | AccionListarBicicleta
