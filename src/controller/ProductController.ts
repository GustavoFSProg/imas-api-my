import { Request, Response } from 'express'
import categoryModel from '../models/categoryModel'
import productsModel from '../models/productsModel'

async function createProducts(req: Request, res: Response) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    const data = req.body.category

    const retorno = await categoryModel.findOne({ name: data })

    if (!retorno) return res.send({ msg: 'Categoria não encontrado!' })

    await productsModel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      peso: req.body.peso,
      image: filename,
      // eslint-disable-next-line no-underscore-dangle
      categoryId: retorno,
    })

    return res.status(201).send({ Message: 'Produto cadastrado com sucessoo' })
  } catch (error) {
    return res.status(400).send({ error, message: 'Erro no cadastro!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await productsModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { createProducts, getAll }
