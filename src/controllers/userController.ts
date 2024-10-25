import { Request, Response } from 'express'
import userService from '../services/userService'

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers()
      return res.json(users)
    } catch (error) {
      return res.json(error)
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(parseInt(req.params.id))
      return res.json(user)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = req.body
      const createdUser = await userService.createUser(newUser)
      res.status(201).json(createdUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const modifyUser = req.body
      const updatedUser = await userService.updateUser(+req.params.id, modifyUser)
      res.status(201).json(updatedUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      // const newUser = req.body
      const createdUser = await userService.deleteUser(+req.params.id)
      res.status(201).json(createdUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }
    }
  }
}

export default new UserController()
