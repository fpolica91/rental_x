import { v4 as uuidV4 } from 'uuid'

interface ICategory {
  name: string;
  id?: string
  description: string;
  created_at: Date
}


export default class Category implements ICategory {
  id: string | undefined;
  name: string;
  description: string;
  created_at: Date


  constructor({ name, description, created_at }: Omit<ICategory, "id">) {
    if (!this.id) {
      this.id = uuidV4()
    }
    this.name = name
    this.description = description
    this.created_at = created_at
  }

}




