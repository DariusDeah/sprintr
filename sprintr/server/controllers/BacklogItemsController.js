import { backlogItemsService } from '../services/BacklogItemsService'
import BaseController from '../utils/BaseController'

export class BacklogItemsController extends BaseController {
  constructor() {
    super('/api/projects/:id/backlog')
    this.router
      .get('', this.getBacklogItems)
      .get('/:id', this.getBacklogItemById)
      .post('', this.createBachlogItem)
      .put('/:id', this.editBacklogItem)
      .delete('/:id', this.removeBacklogItem)
  }

  async removeBacklogItem(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.removeBacklogItem(req.params.id)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async editBacklogItem(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.editBacklogItem(req.data)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async createBachlogItem(req, res, next) {
    try {
      req.data.creatorID = req.userInfo.id
      const BacklogItem = await backlogItemsService.createBachlogItem(req.data)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async getBacklogItemById(req, res, next) {
    try {
      const BacklogItem = await backlogItemsService.getBacklogItemById(req.params.id)
      res.send(BacklogItem)
    } catch (error) {
      next(error)
    }
  }

  async getBacklogItems(req, res, next) {
    try {
      const bItems = await backlogItemsService.getBacklogItems()
      res.send(bItems)
    } catch (error) {
      next(error)
    }
  }
}
