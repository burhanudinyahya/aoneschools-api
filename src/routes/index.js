const usersRoutes = require('./users.routes');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'AONE API',
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => '404 | Not Found!',
  },
  ...usersRoutes,
];

module.exports = routes;
