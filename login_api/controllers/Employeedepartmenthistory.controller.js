import Employeedepartmenthistory from '../models/Employeedepartmenthistory.model.js';
import Employee from '../models/Employee.model.js';

export const findAll = async (req, res) => {
  try {
    const allEmployeeHistory = await Employeedepartmenthistory.findAll({
      attributes: ['employeedepartmenthistoryid', 'startdate', 'enddate'],
      include: {
        model: Employee,
        attributes: ['businessentityid', 'nationalidnumber', 'jobtitle', 'hiredate', 'vacationhours'], // Corregir aquí
        as: 'employee', // Asegurar que coincide con el alias en la asociación
      },
    });

    res.json(allEmployeeHistory);
  } catch (error) {
    console.error('Error al obtener los EmployeeDepartmentHistory:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
