import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDataBase } from './config'
import route from './routes/authRoutes'

dotenv.config()

const app = express()

const { DATA_BASE, PORT } = process.env

app.use(express.json())
app.use(cors())
app.use(route)

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`⚡ Server is running on port ${PORT} 🎉`))

connectDataBase(String(DATA_BASE))

export default app
