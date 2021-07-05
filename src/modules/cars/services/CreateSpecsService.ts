import SpecsRepository from "../repositories/SpecsRepository";

interface SpecsDTO {
  name: string;
  description: string;
}

export default class CreateSpecsService {
  constructor(private specsRepository: SpecsRepository) { }
  public execute({ name, description }: SpecsDTO) {
    const specAlreadyExists = this.specsRepository.findByName(name)
    if (specAlreadyExists) {
      throw new Error("Specification already exists")
    }
    const spec = this.specsRepository.create({ name, description })
    return spec
  }
}