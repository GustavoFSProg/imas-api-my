import { Router } from 'express'
import { register, getAll, login } from '../controller/AuthController'

const route = Router()

route.post('/register', register)
route.get('/', getAll)
route.post('/login', login)

export default route
