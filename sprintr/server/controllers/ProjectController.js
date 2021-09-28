import { projectService } from '../services/ProjectService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class ProjectController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getProjects)
      .get('/:id', this.getProjectsById)
  }

  // GETS REQUESTS
  async getProjects(req, res, next) {
    try {
      const projects = await projectService.getProjects()
      res.send(projects)
    } catch (error) {
      next(error)
    }
  }

  async getProjectsById(req, res, next) {
    try {
      const project = await projectService.getProjectsById(req.params.projectId)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
}
