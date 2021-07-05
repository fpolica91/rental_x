import { Router } from "express"
import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository"
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";
const categoriesRoutes = Router();
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