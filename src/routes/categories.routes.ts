import { Router } from "express"
import createCategoryController from "../modules/cars/useCases/createCategory";
const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handler(request, response)
})


export default categoriesRoutes