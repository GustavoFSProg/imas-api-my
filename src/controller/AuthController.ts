import { Request, Response } from 'express'
import { createUser, generateToken } from '../utils'
import { registerValidation, loginValidation } from '../validators/AuthValidator'
import User from '../models/User'

export async function register(req: Request, res: Response) {
  try {
    const { errors } = await registerValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const user = await createUser(req.body)

    const token = await generateToken(user)

    return res.status(200).json({ msg: 'Cadastrado', user, token })
    // return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await User.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { errors, user } = await loginValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const token = await generateToken(user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send(error)
  }
}
