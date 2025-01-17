'use strict'

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// // const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db:any = {};

// let sequelize:any;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter((file: string) => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.ts' &&
//       file.indexOf('.test.ts') === -1
//     );
//   })
//   .forEach((file: any) => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default  db;

import { Sequelize } from 'sequelize'
// import { readdirSync } from 'fs'
// import { basename as _basename, join } from 'path'

// models
import Usuario from './usuario'
// const basename = _basename(__filename)
const env = process.env.NODE_ENV || 'development'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require(__dirname + '/../config/config.json')[env]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db: any = {}

let sequelize: Sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

// readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.ts'
//     );
//   })
//   .forEach((file) => {
//     const model = require(join(__dirname, file))(sequelize);
//     db[model.name] = model;
//   });

// Cargar los modelos
db.Usuario = Usuario

// Inicializar los modelos
Object.keys(db).forEach(modelName => {
  if (db[modelName].initialize) {
    db[modelName].initialize(sequelize)
  }
})

// assciaciones
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
