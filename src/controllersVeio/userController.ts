import { Request, Response } from 'express'
import dotenv from 'dotenv'
// import md5 from 'md5'
// import { generateToken } from '../utils'
// import { loginValidation } from '../validators/AuthValidator'
import User from '../models/User'

dotenv.config()

export async function getAll(req: Request, res: Response) {
  try {
    const data = await User.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}
