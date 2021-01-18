import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { Alquiler } from '../../models/Alquiler';
import { useEffect } from 'react';

interface GestionAlquilerProps {
  alquiler: Array<Alquiler>;
  listarAlquiler: () => void;
}

export const GestionAlquiler: React.FC<GestionAlquilerProps> = ({
  alquiler,
  listarAlquiler,
}) => {
  useEffect(() => {
    listarAlquiler();
  });

  useEffect(() => {
    console.log("data", alquiler)
  }, []);
  return (
    <DivContainer>
      <DivRow>
        <h1>{alquiler.length}</h1>
      </DivRow>
    </DivContainer>
  );
};

GestionAlquiler.propTypes = {
  alquiler: PropTypes.array.isRequired,
  listarAlquiler: PropTypes.func.isRequired,
};
