import { Router } from "express"
import SpecsRepository from "../modules/cars/repositories/SpecsRepository"
import CreateSpecsService from "../modules/cars/services/CreateSpecsService"


const specsRepository = new SpecsRepository()

const specRouter = Router()

specRouter.post('/', (request, response) => {
  try {
    const { name, description } = request.body
    const createSpecService = new CreateSpecsService(specsRepository)
    const spec = createSpecService.execute({ name, description })
    return response.status(201).json(spec)

  } catch (error) {
    return response.status(301).json(error.message)
  }
})

export default specRouter