const { DataTypes } = require("sequelize");
const sequelize = require("../Conexion/database");

const Estudiante = sequelize.define(
  "Estudiantes",
  {
    IdEstudiante: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreEstudiante: {
      type: DataTypes.STRING,
    },
    EdadEstudiante: {
      type: DataTypes.INTEGER,
    },
    Genero: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Estudiantes",
    timestamps: false,
  }
);

module.exports=Estudiante;
