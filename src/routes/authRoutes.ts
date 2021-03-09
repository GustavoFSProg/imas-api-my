import { Router } from 'express'
import { register, login, getAll } from '../controller/AuthController'

const route = Router()

const routes = [
  route.post('/register', register),
  route.get('/', getAll),
  route.post('/login', login),
]

export default routes
