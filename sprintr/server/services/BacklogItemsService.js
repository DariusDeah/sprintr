import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class BacklogItemsService {
  async getBacklogItems(projectId) {
    const BacklogItems = await dbContext.BacklogItems.find({ projectId: projectId })
    return BacklogItems
  }

  async editBacklogItem(backlogData, userId, backlogId) {
    const foundBacklog = await this.getBacklogItemById(backlogId)
    if (foundBacklog.creatorId.toString() !== userId) {
      throw new Forbidden()
    }
    const BacklogItem = await dbContext.BacklogItems.findByIdAndUpdate(backlogId, backlogData, { new: true })
    return BacklogItem
  }

  async getBacklogItemById(backlogId) {
    const BacklogItem = await dbContext.BacklogItems.findById(backlogId)
    return BacklogItem
  }

  async createBachlogItem(backlogData) {
    const BacklogItem = await dbContext.BacklogItems.create(backlogData)
    if (!BacklogItem) {
      throw new BadRequest("doesn't create")
    }
    await BacklogItem.populate('creator')
    await BacklogItem.populate('sprint')
    await BacklogItem.populate('project')
    return BacklogItem
  }

  async removeBacklogItem(backlogId, userId) {
    const foundBacklog = await this.getBacklogItemById(backlogId)
    if (userId !== foundBacklog.creatorId.toString()) {
      throw new Forbidden()
    }
    await foundBacklog.remove()
    return foundBacklog
  }
}

export const backlogItemsService = new BacklogItemsService()
