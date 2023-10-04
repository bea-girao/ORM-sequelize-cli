const { DataTypes } = require('sequelize');
const orm = require('../connection/orm');

const User = orm.define('tb_users', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
    },
});

// node src/entity/Category.js
// cadastrar usuarios no proprio db: INSERT INTO tb_user...

orm.sync().then(() => {
    console.log('Pronto, tabela de usuario atualizada');
});

module.exports = User;