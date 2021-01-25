import {
  listarAlquilerAsync,
} from 'app/core/redux/acciones/alquiler/AlquilerAcciones';
import { EstadoGeneralAlquiler } from 'app/core/redux/modelo/EstadoGeneralAlquiler';
import { GestionAlquiler } from '../containers/GestionAlquiler';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneralAlquiler) => {
  return state.alquiler;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarAlquiler: listarAlquilerAsync,
})(GestionAlquiler);
