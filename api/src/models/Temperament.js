const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', 
  {
    temperament: {
      type: DataTypes.STRING,
      //allowNull: false,
          }, 
    createdFor: { 
      type: DataTypes.ENUM('API', 'USER'),
      defaultValue: 'API',
      allowNull: false,
         },
      }, 
  {
    timestamps: false,
    freezeTableName: true
   } 
  );
};