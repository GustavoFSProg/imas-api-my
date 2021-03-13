import { Router } from 'express'
import multer from 'multer'
import productsController from '../controller/ProductController'

const uploadConfig = require('../config/uploadConfig')

const productsRoute = Router()

const upload = multer(uploadConfig)

productsRoute.post('/registerProducts', upload.single('image'), productsController.createProducts)
productsRoute.get('/product', productsController.getAll)

export default productsRoute
