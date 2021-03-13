import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
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
    roles: [
      {
        type: String,
        required: true,
        enum: ['admin', 'user'],
      },
    ],
  },
  { timestamps: true }
)

export default model('User', schema)
