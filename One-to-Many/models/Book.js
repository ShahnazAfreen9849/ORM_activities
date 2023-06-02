const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Models { }

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allownull: false,
        },
        author: {
            type: DataTypes.STRING,
            allownull: false,
        },
        isbn: {
            type: DataTypes.STRING,
            allownull: false,
        },
        pages: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        edition: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        is_paperback: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // Store a reference of the `id` of the `Reader` that owns this Book
        reader_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'reader',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;