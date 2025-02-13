const swaggerJsDoc = require('swagger-jsdoc');
const schemas = require('./swaggerSchemas.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Galeria Arte API',
      version: '1.0.0',
      description: 'Documentación de la API de Galería Arte con swagger',
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          schema: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas,
    },
    paths: {},
  },
  apis: [],
};

const specs = swaggerJsDoc(options);

const addSwaggerPath = ({ path, method, config, requiresAuth = false }) => {
  if (!specs.paths[path]) {
    specs.paths[path] = {};
  }

  if (requiresAuth) {
    config.security = [{ bearerAuth: [] }];
  }

  specs.paths[path][method] = config;
};

module.exports = { specs, addSwaggerPath };
