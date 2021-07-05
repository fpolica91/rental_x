import { v4 as uuidV4 } from 'uuid'

interface ISpecs {
  name: string;
  id?: string
  description: string;
  created_at: Date
}


export default class Specs {
  id: string | undefined;
  name: string;
  description: string;
  created_at: Date


  constructor({ name, description, created_at }: Omit<ISpecs, "id">) {
    if (!this.id) {
      this.id = uuidV4()
    }
    this.name = name
    this.description = description
    this.created_at = created_at
  }

}




