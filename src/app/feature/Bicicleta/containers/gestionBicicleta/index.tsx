import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Bicicleta } from '../../models/Bicicleta';
import { useEffect } from 'react';

interface GestionBicicletaProps {
  bicicleta: Array<Bicicleta>;
  listarBici: () => void;
}

export const GestionBicicleta: React.FC<GestionBicicletaProps> = ({
  bicicleta,
  listarBici,
}) => {
  useEffect(() => {
    listarBici();
  });

  useEffect(() => {
    console.log("data", bicicleta)
  }, []);

  return (
    <DivContainer>
      <DivRow>
        <h1>{bicicleta.length}</h1>
      </DivRow>
    </DivContainer>
  );
};

GestionBicicleta.propTypes = {
  bicicleta: PropTypes.array.isRequired,
  listarBici: PropTypes.func.isRequired,
};
