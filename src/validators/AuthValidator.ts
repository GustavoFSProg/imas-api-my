// import { cpf } from 'cpf-cnpj-validator'
// import { Request, Response } from 'express'

import { isValidEmail, isValidPassword, getUserByEmail, getUserByEmailAndPassword } from '../utils'
import { IUser } from '../interfaces'

type IErrors = string[]

export async function registerValidation(data: IUser) {
  const errors: IErrors = []
  const { email, password } = data

  // function isCPF() {
  //   // or const { cpf } = require('cpf-cnpj-validator');

  //   // gera um número de cpf
  //   const num = '95395385053'
  //   // #=> 25634428777

  //   // verifica se é um número válido
  //   const verifyCPF = cpf.isValid(num)
  //   // #=> true

  //   // formata o número gerado
  //   // cpf.format(num)
  //   // #=> 256.344.287-77
  //   return verifyCPF
  // }

  if (!isValidEmail(email)) errors.push('Invalid email')

  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await getUserByEmail(email)
  if (userExists) errors.push('This email already registered')

  return { errors }
}

interface LoginValidationResponseData {
  errors: IErrors
  user?: IUser
}

export async function loginValidation(data: IUser): Promise<LoginValidationResponseData> {
  const errors: IErrors = []
  const { email, password } = data

  if (!isValidEmail(email)) errors.push('Invalid email')

  if (!isValidPassword(password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await getUserByEmailAndPassword(email, password)

  if (!userExists) errors.push('User not found')

  const user = (userExists as unknown) as IUser

  return { errors, user }
}
