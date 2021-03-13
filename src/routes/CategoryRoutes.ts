import { Router } from 'express'
import categoryController from '../controller/CategoryController'

const categoryRoute = Router()

categoryRoute.post('/categoryRegister', categoryController.create)
categoryRoute.get('/category', categoryController.getAll)

export default categoryRoute
