import { Router } from 'express'
import { create, getAll } from '../controller/CategoryController'

const categoryRoute = Router()

categoryRoute.post('/categoryRegister', create)
categoryRoute.get('/category', getAll)

export default categoryRoute
