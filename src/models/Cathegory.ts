import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
})

export default model('Cathegory', schema)
