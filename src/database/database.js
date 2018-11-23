const Sequelize = require('sequelize');

const environment = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(
    config.database.name, 
    config.database.user, 
    config.database.password,
    {
        host: config.database.host, 
        dialect: config.database.dialect
    }
);