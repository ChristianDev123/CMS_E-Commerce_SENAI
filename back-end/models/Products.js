const Sequelize = require('sequelize');
const stockTable = require('./Stocks');
const db = require('../config/db');

const products = db.define('Products',{
    idProducts:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    code:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

products.hasMany(stockTable,{foreignKey:'id_Product'});

module.exports = products;