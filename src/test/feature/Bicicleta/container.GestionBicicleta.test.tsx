import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { GestionBicicleta } from '../../../app/feature/Bicicleta/containers/gestionBicicleta/index';

describe(' <GestionBicicletas />Test', () => {
  let componentWrapper: ShallowWrapper;
  const bicicleta = {
    id: 1,
    marca: 'Jeep',
    serial: 'BALTORO 29 V20',
    color: 'Roja',
    almacenActual: 1,
    fechaCompra: '2021-01-19T05:00:00.000Z',
    estado: 'alquilada',
    valorHora: '5000',
    descripcion: 'Bicicleta de Montaña Jeep Baltoro 29 pulgadas Género: Unisex Material del marco: Aluminio, Número de cambios: 21, Tipo de freno: Disco mecánico, Suspensión: Delantera'
  };

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    componentWrapper = shallow(<GestionBicicleta bicicleta={[bicicleta]} listarBici={() => {}}/>)
    expect(componentWrapper).toMatchSnapshot();
  });

});

export {};
