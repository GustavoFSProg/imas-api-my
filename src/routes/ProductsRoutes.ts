import { Router } from 'express'
import multer from 'multer'
import { getAll, createProducts } from '../controller/ProductController'

const uploadConfig = require('../config/uploadConfig')

const productsRoute = Router()

const upload = multer(uploadConfig)

productsRoute.post('/registerProducts', upload.single('image'), createProducts)
productsRoute.get('/product', getAll)

export default productsRoute
