import {
  listarBicicletaAsync
} from '../../../core/redux/acciones/bicicleta/bicicletaAcciones';
import { EstadoGeneralBicicleta } from '../../../core/redux/modelo/EstadoGeneralBicicleta';
import { GestionBicicleta } from '../containers/gestionBicicleta';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneralBicicleta) => {
  return state.bicicleta;
};

export const ProveedorGestionBicicleta = connect(mapStateToProps, {
  listarBici: listarBicicletaAsync,
})(GestionBicicleta);
