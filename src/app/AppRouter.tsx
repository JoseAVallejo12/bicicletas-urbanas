import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { BicicletaRouter } from 'app/feature/Bicicleta/BicicletaRouter';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/bicicleta" component={BicicletaRouter} />
      </Switch>
    </BrowserRouter>
  );
};
