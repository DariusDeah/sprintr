import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class TasksService {
  async getTasks() {
    const res = dbContext.Tasks.find()
    logger.log('res', res)
  }

  async editTask(name) {
    const res = dbContext.Tasks.find(t => t.name === name)
    logger.log('res', res)
  }

  async removeTask() {
    const res = dbContext.Tasks.remove()
    logger.log('res', res)
  }
}

export const tasksService = new TasksService()
