const schemas = {
  Error: {
    type: 'object',
    properties: {
      message: {type: 'string', example: 'Error interno del servidor'}
    }
  },
  User: {
    type: 'object',
    properties: {
      id: {type: 'integer', example: 1 },
      email: {type: 'string', example: 'srajuanita@mail.com'},
      nombre: {type: 'string', example: 'Juana'},
      apellido: {type: 'string', example: 'Pérez'}
    }
  }
}