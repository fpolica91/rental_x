import CreateCategoryController from "./CreateController";
import CreateCategoryService from "./CreateCategoryService";
import CategoriesRepository from "../../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository()
const createCategoryService = new CreateCategoryService(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryService)
export default createCategoryController