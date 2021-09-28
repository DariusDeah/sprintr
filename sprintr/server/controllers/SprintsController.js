import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintService } from '../services/SprintService'
import BaseController from '../utils/BaseController'

export class SprintsController extends BaseController {
  constructor() {
    super('project/:projectId/api/sprints')
    this.router
      .get('', this.getSprints)
      .get('/:id', this.getSprintById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSprint)
      .put('/id', this.editSprint)
      .delete('/id', this.removeSprint)
  }

  async getSprints(req, res, next) {
    try {
      const sprints = sprintService.getSprints()
      res.send(sprints)
    } catch (error) {
      next(error)
    }
  }

  async getSprintById(req, res, next) {
    try {
      const sprint = sprintService.getSprintById(req.params.sprintId)
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async createSprint(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const sprint = sprintService.createSprint(req.body)
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async editSprint(req, res, next) {
    try {
      const editedSprint = sprintService.createSprint(req.body)
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
