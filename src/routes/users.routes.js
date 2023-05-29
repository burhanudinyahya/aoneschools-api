const {
  getAllUsers,
  getUserById,
} = require('../handlers');

const usersRoutes = [
  {
    method: 'GET',
    path: '/users',
    handler: getAllUsers,
  },
  {
    method: 'GET',
    path: '/users/{userId}',
    handler: getUserById,
  },
];

module.exports = usersRoutes;
