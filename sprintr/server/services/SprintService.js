import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SprintService {
  async getSprints(projectId) {
    const sprints = await dbContext.Sprints.find({ projectId: projectId }).populate('creator')
    return sprints
  }

  async getSprintById(sprintId) {
    const sprint = await dbContext.Sprints.findById(sprintId).populate('creator')
    if (!sprint) {
      throw new BadRequest('no sprint by that name')
    }
    return sprint
  }

  async createSprint(sprintData) {
    const sprint = await dbContext.Sprints.create(sprintData)
    await sprint.populate('creator')
    return sprint
  }

  async editSprint(userId, sprintId, sprintData) {
    const sprint = await this.getSprintById(sprintId)
    if (userId !== sprintData.creatorId.toString()) {
      throw new Forbidden()
    }
    sprint.name = sprintData.name || sprint.name
    await sprint.save()
    return sprint
  }

  async removeSprint(sprintId, userId) {
    const removedsprint = await this.getSprintById(sprintId)
    if (userId !== removedsprint.creatorId.toString()) {
      throw new Forbidden()
    }
    await removedsprint.remove()
    return removedsprint
  }
}
export const sprintService = new SprintService()
