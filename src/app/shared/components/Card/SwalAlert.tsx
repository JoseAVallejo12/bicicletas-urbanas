import Swal from 'sweetalert2';

const alquilerNoRegistrado = (mensaje: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje,
  });
}

const alquilerResgistrado = () => {
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

export default {
  alquilerNoRegistrado,
  alquilerResgistrado
}