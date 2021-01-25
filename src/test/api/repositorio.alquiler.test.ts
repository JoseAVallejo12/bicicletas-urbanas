import { servcioCrearAlquiler } from '../../app/core/api/alquiler.repositorio';

describe('test servico api repósitorio alquiler alpi', () => {

  test('Falla al crear un nuevo alquiler', async () => {
    const cedulaUsuario = '1';
    const idBicicleta = '1';
    const respuesta = servcioCrearAlquiler(cedulaUsuario, idBicicleta);
    expect((await respuesta).status).toBe(400)
  });

})
