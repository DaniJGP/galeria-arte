const jwt = require('jwt-simple');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = { authenticate };
