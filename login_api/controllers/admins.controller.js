import Admins from "../models/Admins.js";
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    try {
        let { nombre, email, fecha_nacimiento, password} = req.body;
        if(!(nombre && email && fecha_nacimiento && password)) {
            res.status(400).send('Todos los campos son requeridos');       
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoAdmin = await Admins.create({
            nombre, 
            email, 
            fecha_nacimiento, 
            password: hashedPassword,
        });
        res.status(201).send({
            code: 201,
            message:`Admin creado exitosamente con el id ${nuevoAdmin.id}`,
        });
    }catch (error) {
        console.error(error)
        res.status(500).send({ code: 500, message: error.message})
    }
};

export const login = async(req, res) => {
    res.json({ code:200, message: 'Login Correcto', token: req.token});
};