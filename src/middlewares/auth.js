// middlewares/auth.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token requerido" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token inválido" });

  try {
    const secret = process.env.JWT_SECRET;
    const payload = jwt.verify(token, secret);
    req.user = payload; // Se puede guardar el nombre de usuario para usarlo en las rutas
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token no válido o expirado" });
  }
};

module.exports = authMiddleware;
