const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'dj25082001', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;