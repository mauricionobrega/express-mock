const faker = require('faker');

module.exports = {
  '/signup-me': (request, response) => {
    response.send({
      'uuid': faker.random.uuid(),
      'email': request.body.email,
      'status': request.body.email === 'mauricio@gmail.com' ? 'ACTIVE' : 'INACTIVE' ,
    });
  }
};
