import { dbContext } from '../db/DbContext'

class BacklogItemsService {
  getBacklogItems() {
    const BacklogItems = dbContext.BacklogItems.find()
    return BacklogItems
  }
}

export const backlogItemsService = new BacklogItemsService()
