import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class TasksService {
  async getTasks() {
    const res = dbContext.Tasks.find(t => t)
    logger.log('res', res)
  }
}

export const tasksService = new TasksService()
