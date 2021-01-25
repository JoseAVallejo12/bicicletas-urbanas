import Swal, { SweetAlertResult } from 'sweetalert2';

export const obtenerCedulaUsuario = (): Promise<SweetAlertResult<any>> => {
  return (Swal.fire({
    title: 'escriba cc',
    input: 'number'
  }))
}