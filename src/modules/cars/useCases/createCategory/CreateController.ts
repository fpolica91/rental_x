import CreateCategoryService from './CreateCategoryService'
import { Request, Response } from 'express'


export default class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) { }

  public handler(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body
      const category = this.createCategoryService.execute({ name, description })
      return response.status(201).json(category)
    } catch (error) {
      return response.status(301).json(error.message)
    }
  }
}