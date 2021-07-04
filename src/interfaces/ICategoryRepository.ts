import Category from "../models/Category";

interface CreateCategoryDTO {
  name: string;
  description: string;
}

export default interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: CreateCategoryDTO): Category;
}
