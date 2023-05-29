const users = require('../db/users');

const getAllUsers = (_, h) => h.response({
  status: 'success',
  data: {
    users,
  },
}).code(200);

module.exports = getAllUsers;
