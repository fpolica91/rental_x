import ICategoriesRepository from "../interfaces/ICategoryRepository"

/**
 * NOTE any reporsitory that implements ICategoriesRepository 
 * will need to implement the three functions descripbed in the interace
 * the service will not have knowledge of which databse we use, 
 * it will be abstracted from it, and the resposibility of implementation 
 * will be the responsibility of the repository
 */

interface IRequest {
  name: string;
  description: string;

}

export default class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepository) {
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
