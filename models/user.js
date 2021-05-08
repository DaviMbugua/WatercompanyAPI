import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Users = sequelize.define('biller', {
  UserID: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  
  UserName: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  Email: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
 
  Password: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'biller',
  timestamps: true,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "UserID" },
      ]
    },
    {
      name: "SID",
      using: "BTREE",
      fields: [
        { name: "SID" },
      ]
    },
    {
      name: "ZID",
      using: "BTREE",
      fields: [
        { name: "ZID" },
      ]
    },
  ]
});
export default Users
