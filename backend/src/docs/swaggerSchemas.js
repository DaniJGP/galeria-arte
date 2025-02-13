const schemas = {
  Error: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Error interno del servidor' },
    },
  },
  RegisterRequest: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        format: 'email',
        example: 'srajuanita@mail.com',
      },
      password: { type: 'string', format: 'password', example: 'abcdefgh' },
      nombre: { type: 'string', example: 'Juana' },
      apellido: { type: 'string', example: 'Pérez' },
    },
    required: ['email', 'password', 'nombre', 'apellido'],
  },
};

module.exports = schemas;
