import { IUser } from 'interfaces'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import User from '../models/User'

export function encryptPassword(password: string) {
  return md5(password, process.env.SECRET as string & { asBytes: true })
}

export function isValidEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export function isValidPassword(password: string) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export async function generateToken(data: IUser | undefined) {
  if (!data) throw Error(`Generate token error`)
  const { email, password } = data
  const { GLOBAL_SALT_KEY } = process.env
  const token = await jwt.sign({ email, password }, GLOBAL_SALT_KEY || '', { expiresIn: '1d' })

  return token
}

export async function decodeToken(token: string) {
  const secret = (process.env.SECRET || '') as string & { json: true }
  return jwt.decode(token, secret)
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.SECRET || '', (error, decode) => {
    if (error) return { error }
    return { decode }
  })
}

const USER_FIELDS = 'firstname lastname email'

export async function getUserByEmailAndPassword(email: string, password: string) {
  const user = await User.findOne({ email, password: encryptPassword(password) }, USER_FIELDS)
  return user
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email }, USER_FIELDS)
  return user
}

export async function createUser(data: IUser) {
  const { firstname, lastname, email, password, roles } = data
  const currentUser = await User.create({
    firstname,
    lastname,
    email,
    password: encryptPassword(password),
    roles,
  })
  const user = (currentUser as unknown) as IUser
  return user
}
