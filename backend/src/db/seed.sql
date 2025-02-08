INSERT INTO
  obras (
    id,
    nombre,
    autor,
    precio,
    img_url,
    descripcion,
    categoria,
    tecnica,
    alto,
    ancho
  )
VALUES
  (
    1,
    'Reflejos del Alma',
    'Sofía Morales',
    1200.00,
    '/images/obra1.jpg',
    'Un vibrante cuadro abstracto que refleja emociones profundas.',
    'Pintura',
    'Óleo sobre lienzo',
    80,
    60
  ),
  (
    2,
    'Silencio Urbano',
    'Javier López',
    900.00,
    '/images/obra2.jpg',
    'Una escena nocturna de la ciudad con un estilo minimalista.',
    'Dibujo',
    'Carboncillo sobre papel',
    50,
    70
  ),
  (
    3,
    'Luz y Sombras',
    'Carla Fernández',
    1500.00,
    '/images/obra3.jpg',
    'Un retrato que juega con el contraste entre luz y sombras.',
    'Retrato',
    'Óleo sobre madera',
    90,
    70
  ),
  (
    4,
    'El Vuelo del Tiempo',
    'Hugo Ramírez',
    750.00,
    '/images/obra4.jpg',
    'Un dibujo que captura el movimiento del tiempo a través de relojes.',
    'Dibujo',
    'Tinta sobre papel',
    40,
    60
  ),
  (
    5,
    'Jardín de Sueños',
    'Laura Gómez',
    1400.00,
    '/images/obra5.jpg',
    'Un paisaje surrealista lleno de colores y formas oníricas.',
    'Pintura',
    'Acrílico sobre lienzo',
    100,
    120
  ),
  (
    6,
    'Memorias del Horizonte',
    'Diego Torres',
    2500.00,
    '/images/obra6.jpg',
    'Una fotografía de un paisaje que evoca tranquilidad y nostalgia.',
    'Fotografía',
    'Impresión digital',
    60,
    90
  ),
  (
    7,
    'Entre Líneas',
    'Marta Sánchez',
    600.00,
    '/images/obra7.jpg',
    'Un dibujo geométrico que juega con la perspectiva y las líneas.',
    'Dibujo',
    'Grafito sobre papel',
    45,
    65
  ),
  (
    8,
    'Ecos del Pasado',
    'Roberto Castillo',
    1800.00,
    '/images/obra8.jpg',
    'Un cuadro que combina elementos históricos y modernos.',
    'Pintura',
    'Mixta sobre madera',
    85,
    110
  ),
  (
    9,
    'Rostros del Alma',
    'Isabel Ruiz',
    2000.00,
    '/images/obra9.jpg',
    'Un retrato emocional que captura la esencia de su protagonista.',
    'Retrato',
    'Pastel sobre papel',
    70,
    50
  ),
  (
    10,
    'Sombras Fugaces',
    'Andrés Vega',
    800.00,
    '/images/obra10.jpg',
    'Un dibujo expresionista que retrata emociones efímeras.',
    'Dibujo',
    'Acuarela y tinta sobre papel',
    50,
    70
  );

INSERT INTO
  users (
    email,
    password,
    rol,
    nombre,
    apellido,
    telefono,
    direccion
  )
VALUES
  (
    'admin@mail.com',
    'qwerty',
    'administrador',
    'Admin',
    'Istrador',
    '+56988888888',
    'Calle verdadera 987'
  ),
  (
    'usuario@mail.com',
    '123456',
    'cliente',
    'Juana',
    'Pérez',
    '+56988888888',
    'Calle falsa 123'
  );
