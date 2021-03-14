import { Request, Response } from 'express'
import dotenv from 'dotenv'
import { cpf } from 'cpf-cnpj-validator'
import { createUser, generateToken } from '../utils'
import { registerValidation, loginValidation } from '../validators/AuthValidator'
import User from '../models/User'

dotenv.config()

export async function register(req: Request, res: Response) {
  try {
    const verifyCPF = cpf.isValid(req.body.cpf)

    if (!verifyCPF) {
      return res.send({ Message: 'CPF invalido' })
    }
    const { errors }: any = await registerValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    await createUser(req.body)

    const token = await generateToken(req.body)

    return res.status(200).send({ message: 'Usuario cadastrado!', token })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await User.find({}, 'firstname lastname email roles createdAt')

    return res.status(200).send(data)
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
