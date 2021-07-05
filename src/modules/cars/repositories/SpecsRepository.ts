import ISpecs from "../interfaces/ISpecs";
import Specs from "../models/Specs"

interface ISpecDTO {
  name: string;
  description: string;
}

export default class SpecsRepository implements ISpecs {
  private specs: Specs[]
  constructor() {
    this.specs = []
  }

  public findByName(name: string): Specs | undefined {
    return this.specs.find(spc => spc.name === name)
  }


  public create({ name, description }: ISpecDTO): Specs {
    const spec = new Specs({
      name,
      description,
      created_at: new Date()
    })
    this.specs.push(spec)
    return spec
  }
}