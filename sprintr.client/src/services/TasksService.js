import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async createTask(projectId) {
    const res = await api.post(`api/projects/${projectId}/tasks`)
    logger.log('created Task', res)
  }
}

export const tasksService = new TasksService()
