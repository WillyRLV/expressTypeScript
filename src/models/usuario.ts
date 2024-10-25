'use strict'
// import {
//   Model
// }  from'sequelize';

// interface UserAttributes {
//   id?: number;
//   nombre: string;
//   email: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
// module.exports = (sequelize:any, DataTypes:any) => {
//   class Usuario extends Model<UserAttributes> {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */

//     public id!: number;
//     public nombre!: string;
//     public email!: string;
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;

//     static associate(models: any) {
//       // define association here
//     }
//   }
//   Usuario.init({
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true

//     },
//     nombre: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Usuario',
//   });
//   return Usuario;
// };

import { Model, DataTypes, Sequelize } from 'sequelize'

interface UserAttributes {
  id?: number
  nombre:string
  email: string
  createdAt?: Date
  updatedAt?: Date
}

class Usuario extends Model<UserAttributes> implements UserAttributes {
  public id!: number
  public nombre!: string
  public email!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static initialize (sequelize: Sequelize) {
    Usuario.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Usuario'
      }
    )
  }
}

export default Usuario
