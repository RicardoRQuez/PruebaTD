import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';


const Person = sequelize.define(
  'persons',
  {
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    persontype: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    namestyle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middlename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    emailpromotion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_person",
        unique: true,
        fields: [
          { name: "businessentityid" },
        ]
      },
    ]
  });
export default Person;
