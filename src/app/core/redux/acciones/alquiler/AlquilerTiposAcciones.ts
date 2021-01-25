import { Alquiler } from 'app/feature/Producto/models/Alquiler';

export const LISTAR_ALQUILER = 'LISTAR_ALQUILER';

interface AccionListarAlquiler {
  type: typeof LISTAR_ALQUILER;
  payload: Alquiler[];
}

export type TiposAccionesAlquiler = AccionListarAlquiler;
