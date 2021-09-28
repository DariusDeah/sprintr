import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SprintService {
  async getSprints(query) {
    const sprints = await dbContext.Sprints.find(query)
    return sprints
  }

  async getSprintById(sprintId) {
    const sprint = await dbContext.Sprints.findById(sprintId)
    if (!sprint) {
      throw new BadRequest('no sprint by that name')
    }
    return sprint
  }

  async createSprint(sprintData) {
    const sprint = await dbContext.Sprints.create(sprintData)
    return sprint
  }

  async editSprint(userId, sprintId, sprintData) {
    const sprint = await this.getSprintById(sprintId)
    if (userId !== sprintData.createrId.toString()) {
      throw new Forbidden()
    }
    sprint.name = sprintData.name || sprint.name
    await sprint.save()
    return sprint
  }

  async removeSprint(userId, sprintId, sprintData) {
    const removedsprint = await this.getSprintById(sprintId)
    if (userId !== removedsprint.creatorId.toString()) {
      throw new Forbidden()
    }
    await removedsprint.remove()
    return removedsprint
  }
}
export const sprintService = new SprintService()
