const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

/*
Principais métodos HTTP:

 - post: Criar uma informação na aplicação.
 - get: buscar/pegar/receber uma informação na aplicação.
 - put: Editar uma informação na aplicação.
 - delete: Deletar uma informação na aplicação.

 Tipos de parâmetros:
 - Query Params: request.query - Usos: Filtros, Ordenação, Paginação...
 - Route Params: request.params - Usos: Identificar um recurso na alteração ou na remoção.
 - Body: request.body - Usos: Dados para criação ou para alteração de um registro.
*/

/*
    MongoDB - (Banco Não-relacional)
*/

// O 'async' é para sincronizar o tempo de resposta da api do github e a nossa requisição
routes.post('/devs', DevController.store);

module.exports = routes;