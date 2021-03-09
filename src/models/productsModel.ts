import { Schema, model } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
    index: true,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

export default model('productsModel', schema)
