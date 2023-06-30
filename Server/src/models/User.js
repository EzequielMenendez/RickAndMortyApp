const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         isEmail: true,
         validate:{
            max: 35,
         }
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            min: 6,
            max: 10,
            is: {
               args: /^(?=.*[0-9]).+$/,
               msg: 'La contraseña debe contener al menos un número'
            }
         }
      },
   }, { timestamps: false });
};
