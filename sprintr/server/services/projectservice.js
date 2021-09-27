import { dbContext } from '../db/DbContext'

class ProjectService {
  async getProjects() {
    const res = await dbContext.Projects.find()
    return res
  }
}
export const projectService = new ProjectService()
