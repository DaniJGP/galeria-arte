const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  const { email, password, nombre, apellido, telefono, direccion } = req.body;

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.getByEmail(email);
    if (userExists) {
      res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario
    await User.create({
      email,
      password: hashedPassword,
      nombre,
      apellido,
      telefono,
      direccion,
    });
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por email
    const user = await User.getByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { email: user.email, rol: user.rol },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Obtener datos del propio usuario
exports.getUser = async (req, res) => {
  try {
    const user = await User.getByEmail(req.user.email);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// TODO Actualizar datos del propio usuario
exports.updateUser = async (req, res) => {

  try {
    const user = await User.getByEmail(req.user.email);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    //
    }
    res.json({ message: 'Usuario actualizado correctamente', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
exports.deleteUserById = async (req, res) => {
  // TODO
  return;
};

// Actualizar un usuario
exports.updateUserById = async (req, res) => {
  // TODO
  return;
};
