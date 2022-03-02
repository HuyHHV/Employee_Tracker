const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    title: {
      type: DataTypes.STRING
    }
  },
  {
    departmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'department',  
        key: 'id', 
     }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);

module.exports = Role;