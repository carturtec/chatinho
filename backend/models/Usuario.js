const { DataTypes, Sequelize } = require('sequelize');
const db = require('./db');

const sequelize = new Sequelize('chatinho', 'root', '', {
  host: 'localhost',
  dialect:  'mysql'
});

const Usuario = sequelize.define('Usuario', {
    
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false     
      
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false 
    }
  
  });
  //apaga e cria a tabela novamente
  //Usuario.sync(({force: true}))
  
  //cria a tabela
  //Usuario.sync();


