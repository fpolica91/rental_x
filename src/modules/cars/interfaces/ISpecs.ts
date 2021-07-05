import Specs from "../models/Specs"

interface ISpecDTO {
  name: string;
  description: string;
}

export default interface ISpecs {
  create({ name, description }: ISpecDTO): Specs
  findByName(name: string): Specs | undefined

}