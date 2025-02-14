const schemas = {
  Error: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Mensaje de error' },
    },
  },

  User: {
    type: 'object',
    properties: {
      id: { type: 'integer', example: 1, minimum: 1 },
      email: {
        type: 'string',
        format: 'email',
        example: 'johnsmith@mail.com',
      },
      password: { type: 'string', format: 'password', example: 'hunter2' },
      nombre: { type: 'string', example: 'John' },
      apellido: { type: 'string', example: 'Smith' },
      direccion: { type: 'string', example: 'Fake Street 123' },
      telefono: { type: 'string', example: '+56912345678' },
      rol: { type: 'string', example: 'cliente' },
    },
  },
  Artwork: {
    type: 'object',
    properties: {
      id: { type: 'integer', example: 1, minimum: 1 },
      nombre: { type: 'string', example: 'Reflejos del Alma' },
      autor: { type: 'string', example: 'Sofía Morales' },
      precio: { type: 'number', example: '1200.00' },
      img_url: { type: 'string', example: '/images/obra1.jpg' },
      descripcion: {
        type: 'string',
        example:
          'Un vibrante cuadro abstracto que refleja emociones profundas.',
      },
      categoria: { type: 'string', example: 'Pintura' },
      tecnica: { type: 'string', example: 'Óleo sobre lienzo' },
      alto: { type: 'integer', example: 80 },
      ancho: { type: 'integer', example: 60 },
    },
  },
};

module.exports = schemas;
