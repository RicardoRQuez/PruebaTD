import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Department = sequelize.define(
  'department',
  {
    departmentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_department",
        unique: true,
        fields: [
          { name: "departmentid" },
        ]
      },
    ]
  });
export default Department