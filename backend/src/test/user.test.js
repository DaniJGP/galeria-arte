const request = require('supertest');
const app = require('../app'); 
const { pool } = require('../config/db'); 

describe('Rutas de la API de Usuarios', () => {
  let token;

  beforeAll(async () => {
    // Limpieza de usuarios antes de cada prueba
    await pool.query('DELETE FROM users WHERE email IN ($1, $2)', ['usuario@prueba.com', 'nuevo@prueba.com']);

    const response = await request(app)
      .post('/api/users/register')
      .send({
        email: 'usuario@prueba.com',
        password: '123456',
        nombre: 'Juan',
        apellido: 'Pérez'
      });

    expect(response.status).toBe(201);
  });

  afterAll(async () => {
    // Cerrar conexión con la base de datos después de las pruebas
    await pool.end();
  });

  it('Debería devolver un token de acceso si las credenciales son correctas', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'usuario@prueba.com',
        password: '123456'
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token;
  });

  it('Debería devolver un error si las credenciales son incorrectas', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'usuario@prueba.com',
        password: 'wrongpassword'
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Credenciales incorrectas');
  });

  it('Debería registrar un nuevo usuario', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        email: 'nuevo@prueba.com',
        password: '123456',
        nombre: 'Carlos',
        apellido: 'Lopez'
      });

    // Agregar log para ver la respuesta en caso de error
    console.log('Respuesta al registrar usuario:', response.body);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Usuario registrado con éxito');
  });

  it('Debería devolver un error si el correo ya está registrado', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        email: 'usuario@prueba.com',
        password: '123456',
        nombre: 'Juan',
        apellido: 'Pérez'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('El correo ya está registrado');
  });

  it('Debería devolver un estado 200 OK', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it('Debería devolver una lista de usuarios', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
