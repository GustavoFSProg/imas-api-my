import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import { connectDataBase } from './config'
import { routes } from './routes/index'

dotenv.config()

const app = express()

const { DATA_BASE, PORT } = process.env

app.use(express.json())
app.use(cors())
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`⚡ Server is running on port ${PORT} 🎉`))

connectDataBase(String(DATA_BASE))

export default app
