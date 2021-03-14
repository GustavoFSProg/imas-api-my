import { Request, Response } from 'express'
import Cathegory from '../models/Cathegory'

export async function create(req: Request, res: Response) {
  try {
    await Cathegory.create({
      name: req.body.name,
    })

    return res.status(201).send({ msg: 'Categoria cadastrada com sucesso!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu erro!' })
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const data = await Cathegory.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Erro', error })
  }
}
