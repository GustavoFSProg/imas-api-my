1 - title
2 - imagem
3 - descrição
4 - Categoria
5 - Preço
6 - Peso

import uploadConfig from '../config/uploadConfig'

const upload = multer(uploadConfig)

const route = new Router()

route.get('/', productsController.getAll)
route.delete('/delete/:id', productsController.apagar)
route.get('/find/:id', productsController.getById)
route.post('/product', upload.single('image'), productsController.create)
route.put('/update/:id', productsController.update)
