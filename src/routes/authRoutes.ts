import { Router } from 'express'
import { register, getAll, login } from '../controller/AuthController'

const authRoute = Router()

authRoute.post('/register', register)
authRoute.get('/', getAll)
authRoute.post('/login', login)

export default authRoute
