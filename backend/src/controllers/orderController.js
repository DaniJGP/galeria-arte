const pool = require('../config/db');
const Order = require('../models/Order');
const User = require('../models/User');

exports.createUserOrder = async (req, res) => {
  const email = req.user.email;
  try {
    const user = await User.getByEmail(email);
    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const { precio_total, obras_id, direccion } = req.body;
    const order = await Order.create({
      user_id: user.id,
      direccion: direccion ? direccion : user.direccion,
      precio_total,
      obras_id,
    });
    res.json({ message: 'Orden de compra creada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la orden' });
  }
};
