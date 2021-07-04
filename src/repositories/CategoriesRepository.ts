
import Category from "../models/Category"

interface CreateCategoryDTO {
  name: string;
  description: string;
}


export default class CategoriesRepository {
  private categories: CreateCategoryDTO[];

  constructor() {
    this.categories = [];
  }

  public create({ description, name }: CreateCategoryDTO): Category {
    const category = new Category({
      name,
      description,
      created_at: new Date()
    });
    this.categories.push(category)
    return category
  }
}

