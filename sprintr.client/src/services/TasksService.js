import { AppState } from '../AppState'
import { Task } from '../Models/Task'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async createTask(taskData, projectId) {
    const res = await api.post(`api/projects/${projectId}/tasks`, taskData)
    logger.log('created Task', res)
    AppState.tasks.unshift(new Task(res.data))
  }

  async getTasks(projectId) {
    const res = await api.get(`api/projects/${projectId}/tasks`)
    AppState.tasks = res.data.map(t => new Task(t))
  }
}

export const tasksService = new TasksService()
