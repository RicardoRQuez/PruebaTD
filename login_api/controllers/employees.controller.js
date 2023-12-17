import Employee from "../models/Employee.model.js";

export const findAll = async (req, res) => {
    try {
      // Obtener todos los usuarios
      const allEmployee = await Employee.findAll();
      
      res.json(allEmployee);
    } catch (error) {
      console.error('Error al obtener los Employee:', error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  };