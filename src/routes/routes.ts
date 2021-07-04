import express from 'express';
import CreateCourseService from '../services/CreateCourseService';
const createCourseService = new CreateCourseService()
const routes = express()

routes.post('/course', async (request, response) => {
  const { name, duration, instructor } = request.body
  const course = await createCourseService.execute({ name, duration, instructor })
  return response.json(course)
})


export default routes;