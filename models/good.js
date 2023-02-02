'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Review, Cart, Order}) {
      // define association here
      this.hasMany(Review, { foreignKey: 'goods_id', as: 'reviews' });
      this.hasMany(Cart, { foreignKey: 'goods_id', as: 'carts' });
      this.hasMany(Order, { foreignKey: 'goods_id', as: 'orders' });
    }
  }
  good.init({
    seller: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    goodsname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    explain: {
      type: Sequelize.STRING,
      allowNull: false,
    },
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
    modelName: 'Goods',
    tableName: 'goods'
  });
  return good;
};