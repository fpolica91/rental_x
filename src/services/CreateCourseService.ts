

interface ICourse {
  name: string;
  duration: number;
  instructor: string;
}

export default class CreateCourseService {
  private courses: ICourse[] = []

  public async execute({ name, duration, instructor }: ICourse): Promise<ICourse> {
    const course = { name, duration, instructor }
    this.courses.push(course)
    return course;
  }
}