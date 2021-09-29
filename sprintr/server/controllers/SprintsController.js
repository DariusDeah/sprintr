import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintService } from '../services/SprintService'
import BaseController from '../utils/BaseController'

export class SprintsController extends BaseController {
  constructor() {
    super('api/projects/:projectId/sprints')
    this.router
      .get('', this.getSprints)
      .get('/:id', this.getSprintByProjectId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSprint)
      .put('/:id', this.editSprint)
      .delete('/:id', this.removeSprint)
  }

  async getSprints(req, res, next) {
    try {
      const sprints = await sprintService.getSprints(req.params.projectId)
      res.send(sprints)
    } catch (error) {
      next(error)
    }
  }

  async getSprintByProjectId(req, res, next) {
    try {
      const sprint = await sprintService.getSprints()
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async createSprint(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const sprint = await sprintService.createSprint(req.body)
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async editSprint(req, res, next) {
    try {
      const editedSprint = await sprintService.editSprint(req.body, req.params.id)
      res.send(editedSprint)
    } catch (error) {
      next(error)
    }
  }

  async removeSprint(req, res, next) {
    try {
      const removedSprint = sprintService.removeSprint(req.params.id, req.userInfo.id)
      res.send(removedSprint)
    } catch (error) {
      next(error)
    }
  }
}
