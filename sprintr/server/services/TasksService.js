import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class TasksService {
  async addTask(body) {
    const task = await dbContext.Tasks.create(body)
    logger.log('added task', task)
    return task
  }

  async getTasks() {
    const tasks = await dbContext.Tasks.find()
    logger.log(' get task res', tasks)
    return tasks
  }

  async editTask(taskId) {
    // const task = await dbContext.Tasks
    // logger.log('edit task res', task)
    // return task
  }

  async removeTask() {
    const task = dbContext.Tasks.remove()
    logger.log(' remove taskres', task)
    return task
  }
}

export const tasksService = new TasksService()
