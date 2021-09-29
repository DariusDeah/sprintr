import { dbContext } from '../db/DbContext'

class BacklogItemsService {
  async removeBacklogItem(id) {
    const BacklogItem = await dbContext.BacklogItems.findByIdAndDelete(id)
    return BacklogItem
  }

  async editBacklogItem(BacklogId, data) {
    const BacklogItem = await dbContext.BacklogItems.findByIdAndUpdate(BacklogId, data, { new: true })
    return BacklogItem
  }

  async createBachlogItem(data) {
    const BacklogItem = await dbContext.BacklogItems.create(data)
    return BacklogItem
  }

  async getBacklogItemById(backlogId) {
    const BacklogItem = await dbContext.BacklogItems.findById(backlogId)
    return BacklogItem
  }

  async getBacklogItems() {
    const BacklogItems = await dbContext.BacklogItems.find()
    return BacklogItems
  }
}

export const backlogItemsService = new BacklogItemsService()
