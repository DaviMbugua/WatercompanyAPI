import Sequelize from 'sequelize';
import {sequelize} from "../db/dbConnect.js";

const Payments = sequelize.define('payments', {
    TransactionID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billid: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'billing',
        key: 'billid'
      }
    },
    ExpectedAmount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PaidAmount: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PremiseId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'premises',
        key: 'PremiseIdp'
      }
    }
  }, {
    sequelize,
    tableName: 'payments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TransactionID" },
        ]
      },
      {
        name: "billid",
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
      {
        name: "PremiseId",
        using: "BTREE",
        fields: [
          { name: "PremiseId" },
        ]
      },
    ]
  });
export default Payments
