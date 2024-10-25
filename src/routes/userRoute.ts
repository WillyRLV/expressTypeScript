import express from 'express'
import userController from '../controllers/userController'

const router = express.Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

// ... (otras rutas para crear, actualizar y eliminar usuarios)

export default router
