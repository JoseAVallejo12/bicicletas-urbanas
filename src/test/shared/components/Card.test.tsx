import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';

import { MediaCardBici } from '../../../app/shared/components/Card/index';

describe(' <MediaCardBici />Test', () => {
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

  beforeEach(() => {
    componentWrapper = shallow(<MediaCardBici bici={bicicleta} listarBici={() => {}}/>)
  })

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    expect(componentWrapper).toMatchSnapshot();
  });

  it('renders the heading', () => {
    expect(componentWrapper.find('.MuiPaper-root')).toHaveLength(0);
  });


});

export {};
