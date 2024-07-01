
import db from '../models/index';
import bcrypt from 'bcryptjs'; // Importar bcryptjs

interface userInput {
  nombre: string;
  email: string;
}

class UserService {
  async getAllUsers() {
    return await db.Usuario.findAll();
  }

  async getUserById(id: number) {

    const user = await db.Usuario.findByPk(id);
    if (!user) {
      throw new Error('User not found');

    }
    return user;
  }

  async createUser(data: userInput) {
    return await db.Usuario.create(data);
  }

  async updateUser(id: number, data: userInput) {
    const user = await db.Usuario.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.update(data);
    return user;
  }

  async deleteUser(id: number) {
    const user = await db.Usuario.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
  }
}

export default new UserService();