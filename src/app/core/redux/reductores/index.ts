import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import alquiler from './alquiler/alquilerReductor';
import bicicleta from './bicicleta/bicicletaReductor';

export default combineReducers({ productos, alquiler, bicicleta });
