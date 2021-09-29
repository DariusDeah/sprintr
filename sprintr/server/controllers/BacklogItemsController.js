import { Auth0Provider } from '@bcwdev/auth0provider'
import { backlogItemsService } from '../services/BacklogItemsService'
import BaseController from '../utils/BaseController'

export class BacklogItemsController extends BaseController {
  constructor() {
    super('/api/projects/:projectId/backlog')
    this.router
      .get('', this.getBacklogItems)
      .get('/:id', this.getBacklogItemByProjectId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBachlogItem)
      .put('/:id', this.editBacklogItem)
      .delete('/:id', this.removeBacklogItem)
  }

  async getBacklogItems(req, res, next) {
    try {
      const bItems = await backlogItemsService.getBacklogItems(req.params.projectId)
      res.send(bItems)
    } catch (error) {
      next(error)
    }
  }

  async getBacklogItemByProjectId(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.getBacklogItems(req.params.projectId)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async createBachlogItem(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const BacklogItem = await backlogItemsService.createBachlogItem(req.body)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async editBacklogItem(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.editBacklogItem(req.body, req.userInfo.id, req.params.id)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async removeBacklogItem(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.removeBacklogItem(req.params.id, req.userInfo.id)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }
}
