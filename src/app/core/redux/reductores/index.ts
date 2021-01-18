import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import alquiler from './alquiler/alquilerReductor';

export default combineReducers({ productos, alquiler });
