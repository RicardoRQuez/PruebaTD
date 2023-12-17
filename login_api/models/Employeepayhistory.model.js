import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';


const Employeepayhistory = sequelize.define(
  'employeepayhistorys',
  {
    employeepayhistoryid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'businessentityid'
      }
    },
    ratechangedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    payfrequency: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeepayhistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employeepayhistory",
        unique: true,
        fields: [
          { name: "employeepayhistoryid" },
        ]
      },
    ]
  });
export default Employeepayhistory;
