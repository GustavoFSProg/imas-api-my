import { Schema, model } from 'mongoose'

const schema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  CPF: {
    type: String,
    required: true,
  },
  rg: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
})

export default model('Client', schema)
