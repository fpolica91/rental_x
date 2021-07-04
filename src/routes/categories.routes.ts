import { Router } from "express"
import { v4 as uuidV4 } from "uuid"
import CategoriesRepository from "../repositories/CategoriesRepository"
import CreateCategoryService from "../services/CreateCategoryService";
const categoriesRoutes = Router();
const categories = []
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response) => {
  try {
    const { name, description } = request.body
    const createCategoryService = new CreateCategoryService(categoriesRepository)
    const category = createCategoryService.execute({ name, description })
    return response.status(201).json(category)
  } catch (error) {
    return response.status(301).json(error.message)
  }
})


export default categoriesRoutes