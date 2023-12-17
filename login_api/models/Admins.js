  import { DataTypes } from 'sequelize';
  import sequelize from '../config/db.config.js';

  const Admins = sequelize.define(
    'admin',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true // Esto indica que se generará automáticamente un valor incremental para la clave primaria
      },
      
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
      },
      fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          esAlfanumerico: function(value) {
            // La función de validación personalizada
            if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
              throw new Error('La contraseña debe contener al menos una letra y un número.');
            }
          },
        },
      },
    }, {
      sequelize,
      tableName: 'admins',
      schema: 'public',
      timestamps: true,
      
    });
  export default Admins