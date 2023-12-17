import Department from "./Department.model.js";
import Employee from "./Employee.model.js";
import Employeedepartmenthistory from "./Employeedepartmenthistory.model.js";
import Employeepayhistory from "./Employeepayhistory.model.js";
import Person from "./Person.model.js";
import Shift from "./Shift.model.js";



Employeedepartmenthistory.belongsTo(Department, {
  as: "department",
  foreignKey: "departmentid"
});

Department.hasMany(Employeedepartmenthistory, {
  as: "employeedepartmenthistories",
  foreignKey: "departmentid"
});

Employeedepartmenthistory.belongsTo(Employee, {
  as: "businessentity",
  foreignKey: "businessentityid"
});

Employee.hasMany(Employeedepartmenthistory, {
  as: "employeedepartmenthistories",
  foreignKey: "businessentityid"
});

Employeepayhistory.belongsTo(Employee, {
  as: "businessentity",
  foreignKey: "businessentityid"
});

Employee.hasMany(Employeepayhistory, {
  as: "employeepayhistories",
  foreignKey: "businessentityid"
});

Employee.belongsTo(Person, {
  as: "businessentity",
  foreignKey: "businessentityid"
});

Person.hasOne(Employee, {
  as: "employee",
  foreignKey: "businessentityid"
});

Employeedepartmenthistory.belongsTo(Shift, {
  as: "shift", foreignKey: "shiftid"
});

Shift.hasMany(Employeedepartmenthistory, {
  as: "employeedepartmenthistories",
  foreignKey: "shiftid"
});


