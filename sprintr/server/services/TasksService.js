import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class TasksService {
  async getTasks() {
    const tasks = dbContext.Tasks.find()
    logger.log('res', tasks)
    return tasks
  }

  async editTask(name) {
    const task = dbContext.Tasks.find(t => t.name === name)
    logger.log('res', task)
    return task
  }

  async removeTask() {
    const task = dbContext.Tasks.remove()
    logger.log('res', task)
    return task
  }
}

export const tasksService = new TasksService()
