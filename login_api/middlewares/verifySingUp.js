import jwt from "jsonwebtoken";
import Admins from "../models/Admins.js";
import bcrypt from "bcrypt";

export const emitToken = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let usuario = await Admins.findOne({
      where: { email },
      attributes: ["id", "nombre", "email", "fecha_nacimiento", "password"],
    });
    console.log("Resultado de la consulta:", usuario);

    if (!usuario) {
      return res
        .status(400)
        .json({ code: 400, message: "Error de autenticación." });
    }
    let passwordHash = await bcrypt.compare(password, usuario.password);

    if (!passwordHash) {
      return res
        .status(400)
        .json({
          code: 400,
          message: "Error de autenticaciónm, verifique credenciales.",
        });
    }

    //ELIMINAMOS EL PASSWORD DESPUÉS DE VERIFICAR HASH
    delete usuario.password;

    let token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: usuario,
      },
      process.env.PASSWORD_SECRET
    );
    //console.log(token);
    req.token = token;
    req.usuario = usuario;

    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        code: 500,
        message: "Error en proceso de emisión de credenciales.",
      });
  }
};
export const verifyToken = (req, res, next) => {
  try {
    // console.log(token);
    
      token = req.headers["token"];
      if (!token)
        return res
          .status(400)
          .send("ruta protegida, debe proporcionar un token de acceso.");
      token = token.split(" ")[1];
      // console.log(token);
      if (token.length == 0) {
        throw new Error("No se ha proporcionado un token");
      }
    

    jwt.verify(token, process.env.PASSWORD_SECRET, async (error, decoded) => {
      if (error) {
        return res.status(401).json({
          code: 401,
          message:
            "debe proporcionar un token válido / su token puede estar expirado.",
        });
      }

      try {
        let usuario = await Admins.findByPk(decoded.data.id, {
          attributes: ["id", "firstName", "lastName", "email"],
        });

        if (!usuario) {
          return res.status(400).json({
            code: 400,
            message: "Usuario ya no existe en el sistema.",
          });
        }
        req.usuario = usuario;

        next();
      } catch (error) {
        res.status(500).json({ code: 500, message: "Error en autencicación." });
      }
    });
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: error.message,
    });
  }
};
