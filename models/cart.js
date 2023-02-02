'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Customer, Goods}) {
      // define association here
      this.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
      this.belongsTo(Goods, { foreignKey: 'goods_id', as: 'goods' });
    }
  }
  cart.init({
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts'
  });
  return cart;
};