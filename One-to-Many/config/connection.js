const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

modeule.exports = sequelize;