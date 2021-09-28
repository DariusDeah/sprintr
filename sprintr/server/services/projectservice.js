import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProjectService {
  async getProjects(query) {
    const projects = await dbContext.Projects.find(query)
    return projects
  }

  // finds  project by the id if project doesnt exsit  bad request is thrown
  async getProjectsById(projectId) {
    const project = await dbContext.Projects.findById(projectId).populate('creator')
    !project && new BadRequest('no project by that name')
    return project
  }

  async createProject(projectData) {
    const project = await dbContext.Projects.create(projectData)
    return project
  }

  // makes sure only creator can delete
  async editProject(projectData, projectId, userId) {
    const project = await this.getProjectsById(projectId)
    // validates userId matches creator id
    userId !== projectData.creatorId.toString() && new Forbidden()
    // setting  project model data to be user editd if user changed nothing data stays same
    project.name = projectData.name || project.name
    project.description = projectData.description || project.description
    // NOTE save the changes before data is retured
    await project.save()
    return project
  }

  async removeProject(projectId, userId) {
    const removedProject = await this.getProjectsById(projectId)
    userId !== removedProject.creatorId.toString() && new Forbidden()
    // remove the project then send it back to requester
    await removedProject.remove()
    return removedProject
  }
}
export const projectService = new ProjectService()
