const faker = require('faker');
const data = {
  uuid: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  zipCode: faker.address.zipCode(),
  cellphone: faker.phone.phoneNumber(),
  petNames: [faker.name.firstName()]
};

module.exports = {
  '/check-email': (request, response) => {
    let status = 'INACTIVE';
    console.log(request.body.email);
    if (request.body.email === 'mauricio@gmail.com') {
      status = 'ACTIVE';
    } else if (request.body.email === 'mauricio2@gmail.com') {
      status = 'INACTIVE';
    }

    response.send({
      'uuid': data.uuid,
      'email': request.body.email,
      'status': status
    });
  },
  '/tutor': (request, response) => {
    if (request.body.email === 'mauricio2@gmail.com') {
      response.send({
        'step': 'HUMAN',
        'data': {
          'uuid': data.uuid,
          'email': request.body.email,
          'firstName': data.firstName,
          'lastName': data.lastName,
          'zipCode': '01532022',
          'cellphone': {
            'areaCode': '11',
            'number': '988023773'
          },
          // 'howToKnowEC': 'facebook',
          'petNames': data.petNames
        }
      });
    } else {
      response.send({});
    }
  },
  '/pets': (request, response) => {
    response.send({
      'step': 'PET',
      'data': {
        'name': 'Nicole', //n esta aberto mas eu preciso p/ vincular no cadastro
        'gender': 'F', //M ou F
        'birthMath': '06/1969', //mes/ano
        'breed': 'Lhaza-apso',
        'weight': {
          'kg': 12, //number
          'g': 300 //number
        },
        'mealsPerDay': 4, //number
        'shape': 'Gordinho', //enum
        'castrated': true,
        'healthProblems': false
      }
    });
  }
};
