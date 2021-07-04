import { Router } from "express"
import { v4 as uuidV4 } from "uuid"
import CategoriesRepository from "../repositories/CategoriesRepository"
const categoriesRoutes = Router();
const categories = []

categoriesRoutes.post("/", (request, response) => {
  const categoriesRepository = new CategoriesRepository()
  const { name, description } = request.body
  const category = categoriesRepository.create({ name, description })
  return response.status(201).json(category)
})

export default categoriesRoutes