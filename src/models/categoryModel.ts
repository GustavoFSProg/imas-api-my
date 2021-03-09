import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
})

export default model('categoryModel', schema)
