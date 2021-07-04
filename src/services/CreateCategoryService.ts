import CategoriesRepository from "../repositories/CategoriesRepository"
// import _ from "lodash"

interface IRequest {
  name: string;
  description: string;

}

export default class CreateCategoryService {

  constructor(private categoriesRepository: CategoriesRepository) {
  }

  public createObject({ name, description }: IRequest): IRequest {
    return { name, description }
  }

  public execute({ name, description }: IRequest): IRequest {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name)
    if (categoriesAlreadyExists) {
      throw new Error("category already exists")
    }
    const category = this.createObject({ name, description })
    this.categoriesRepository.create(category)
    return category
  }

}
