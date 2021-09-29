import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class TasksService {
  async addTask(body) {
    const task = await dbContext.Tasks.create(body)
    logger.log('added task', task)
    return task
  }

  async getTaskById(taskId) {
    const task = await dbContext.Tasks.findById(taskId).populate('creator').populate('backlog').populate('project')
    if (!task) {
      throw new BadRequest('No Tasks')
    }
    return task
  }

  async getTasks(projectId) {
    const tasks = await dbContext.Tasks.find({ projectId })
    return tasks
  }

  async editTask(taskId, data) {
    const task = await dbContext.Tasks.findByIdAndUpdate(taskId, data, { new: true })
    logger.log('edit task res', task)
    return task
  }

  async removeTask(projectId, userId, taskId) {
    const foundTask = await this.getTaskById(taskId)
    if (userId !== foundTask.creatorId.tostring()) {
      throw new Forbidden('This is not Your Task')
    }
    await foundTask.remove()
    return foundTask
  }
}

export const tasksService = new TasksService()
