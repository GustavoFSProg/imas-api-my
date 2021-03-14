import { Request, Response } from 'express'
import Cathegory from '../models/Cathegory'
import Product from '../models/Product'

export async function createProducts(req: Request, res: Response) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    const data = req.body.category

    const cathegory = await Cathegory.findOne({ name: data })

    if (!cathegory) return res.send({ msg: 'Categoria não encontrado!' })

    await Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      weight: req.body.weight,
      image: filename,
      // eslint-disable-next-line no-underscore-dangle
      categoryId: cathegory,
    })

    return res.status(201).send({ Message: 'Produto cadastrado com sucessoo' })
  } catch (error) {
    return res.status(400).send({ error, message: 'Erro no cadastro!' })
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await Product.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}
