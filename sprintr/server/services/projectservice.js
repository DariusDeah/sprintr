import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ProjectService {
  async getProjects() {
    const projects = await dbContext.Projects.find()
    return projects
  }

  // finds a project by the id (projectId) if that project doesnt exesit a bad request is thrown
  async getProjectsById(projectId) {
    const project = await dbContext.Projects.findById(projectId).populate('creator')
    if (!project) {
      throw new BadRequest()
    }
    return project
  }
}
export const projectService = new ProjectService()
