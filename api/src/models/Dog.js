const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
          }, 
    image: {
      type: DataTypes.STRING,
      //allowNull: false,
           },
    heightMax: {
      type: DataTypes.SMALLINT,
      allowNull: false,
           },
    heightMin: {
      type: DataTypes.SMALLINT,
      allowNull: false,
                },
    weightMin: {
      type: DataTypes.SMALLINT,
     allowNull: false,
               },
     weightMax: {
      type: DataTypes.SMALLINT,
     allowNull: false,
                },
     oldYearMin: {
      type: DataTypes.SMALLINT,
     //allowNull: false,
                 },
     oldYearMax: {
      type: DataTypes.SMALLINT,
     //allowNull: false,
                 },
      createdFor: { 
      type: DataTypes.ENUM('API', 'USER'),
      defaultValue: 'USER',
     allowNull: false,
      }
  }, 
  {timestamps: false} // aca me elimino el  createdAt | updatedAt de la tabla dog
  );

  
};

