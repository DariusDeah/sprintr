import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProjectService {
  async getProjects(query) {
    const projects = await dbContext.Projects.find(query)
    return projects
  }

  async getProjectsById(projectId) {
    const project = await dbContext.Projects.findById(projectId).populate('creator')
    if (!project) {
      throw new BadRequest('no project by that name')
    }
    return project
  }

  async createProject(projectData) {
    const project = await dbContext.Projects.create(projectData)
    return project
  }

  async editProject(projectData, projectId, userId) {
    const project = await this.getProjectsById(projectId)
    // validates userId matches creator ids
    if (userId !== projectData.creatorId.toString()) {
      throw new Forbidden()
    }

    // setting  project model data to be user editd if user changed nothing data stays same
    project.name = projectData.name || project.name
    project.description = projectData.description || project.description

    // NOTE save the changes before data is retured
    await project.save()
    return project
  }

  async removeProject(projectId, userId) {
    const removedProject = await this.getProjectsById(projectId)
    if (userId !== removedProject.creatorId.toString()) {
      throw new Forbidden()
    }

    // remove the project and send it back to requester
    await removedProject.remove()
    return removedProject
  }
}
export const projectService = new ProjectService()
