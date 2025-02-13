const { addSwaggerPath } = require('../swaggerConfig');

addSwaggerPath({
  path: '/api/users/register',
  method: 'post',
  config: {
    summary: 'Registra un usuario',
    tags: ['User'],
    requestBody: { $ref: '#/components/schemas/RegisterRequest' },
    responses: {
      201: {
        description: 'Registra un usuario',
        content: {
          'apllication/json': {
            type: 'object',
            properties: { message: 'Usuario registrado' },
          },
        },
      },
      400: {
        description: 'El correo ya está registrado',
        content: {
          'apllication/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
      400: {
        description: 'Todos los campos son necesarios',
        content: {
          'apllication/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
      500: {
        description: 'Error al registrar el usuario',
        content: {
          'apllication/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
    },
  },
});
