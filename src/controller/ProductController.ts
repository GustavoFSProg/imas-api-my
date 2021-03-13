import { Request, Response } from 'express'
import productsModel from '../models/productsModel'

async function createProducts(req: Request, res: Response) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await productsModel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      peso: req.body.peso,
      image: filename,
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
