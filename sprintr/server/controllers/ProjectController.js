import { projectService } from '../services/ProjectService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class ProjectController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getProjects)
      .get('/:id', this.getProjectsById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createProject)
      .put('/:id', this.editProject)
  }

  // GET REQUESTS
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

  // --
  // POST REQUESTS
  async createProject(req, res, next) {
    try {
      const project = await projectService.createProject(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
  
  // 
  async editProject(req,res,next)
}
