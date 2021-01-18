export interface Alquiler {
  id: number;
  cedulaUsuario: string;
  serialBicicleta: string;
  fechaAlquiler: string;
  ciudad: string;
  estado: boolean;
  fechaEntrega: string;
  horasTranscurridas: number;
  total: number
}
