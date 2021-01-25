import * as React from 'react';
import { Layout } from '../../../shared/components/Layout';
import { ProveedorGestionBicicleta } from '../hoc/ProveedorGestionBicicleta';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Bicicletas" description="Gestión de Bicicletas">
      <ProveedorGestionBicicleta />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
