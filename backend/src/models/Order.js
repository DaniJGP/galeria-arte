const { pool } = require('../config/db');

exports.create = async ({
  user_id,
  precio_total,
  direccion,
  obras_id = [1, 2],
}) => {
  // Crea la orden de compra en la tabla correspondiente
  const result = await pool.query(
    `INSERT INTO orders (
        user_id, precio_total, direccion
      ) 
      VALUES ($1, $2, $3) RETURNING *`,
    [user_id, precio_total, direccion]
  );

  const order = result.rows[0]
  // Lee el array de IDs de obras y usa el order.id recién retornado para
  // TODO probar con un array real
  for (const obra_id of obras_id) {
    await pool.query(
      `
      INSERT INTO
       orders_obra (order_id, obra_id)
      VALUES
        ($1, $2) RETURNING *
      `,
      [order.id, obra_id]
    );
  }
  return { order };
};
