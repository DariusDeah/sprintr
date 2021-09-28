import { backlogItemsService } from '../services/BacklogItemsService'
import BaseController from '../utils/BaseController'

export class BacklogItemsController extends BaseController {
  constructor() {
    super('/api/projects/:id/backlog')
    this.router
      .get('', this.getBacklogItems)
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
