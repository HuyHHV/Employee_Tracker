const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    firstName: {
      type: DataTypes.STRING
    }
  },
  {
    lastName: {
      type: DataTypes.INTEGER
    }
  },
  {
    roleID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'role',  
        key: 'id', 
     }
    }
  },
  {
    managerID: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Employee;