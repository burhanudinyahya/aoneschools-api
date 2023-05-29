const users = require('../db/users');

const getUserById = (request, h) => {
  const { userId } = request.params;
  const user = users.filter((b) => b.id === userId)[0];

  if (user !== undefined) {
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }

  return h.response({
    status: 'fail',
    message: 'User not found',
  }).code(404);
};

module.exports = getUserById;
