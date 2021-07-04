
import Category from "../models/Category"

interface CreateCategoryDTO {
  name: string;
  description: string;
}


export default class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public findByName(name: string): Category | undefined {
    const category = this.categories.find(category => category.name === name);
    return category
  }

  public create({ description, name }: CreateCategoryDTO): Category {
    const category = new Category({
      name,
      description,
      created_at: new Date()
    });
    this.categories.push(category)
    console.log(this.categories)
    return category
  }
  public list(): Category[] {
    return this.categories;
  }
}

