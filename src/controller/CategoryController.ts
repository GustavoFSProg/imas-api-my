import { Request, Response } from 'express'
import categoryModel from '../models/categoryModel'

async function create(req: Request, res: Response) {
  try {
    await categoryModel.create({
      name: req.body.name,
    })

    return res.status(201).send({ msg: 'Categoria cadasstrado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu erro!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await categoryModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Erro', error })
  }
}

export default { create, getAll }
