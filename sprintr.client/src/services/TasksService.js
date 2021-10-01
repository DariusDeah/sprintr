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

  async toggleIsComplete(taskId) {
    const foundTask = await AppState.tasks.find(t => t.id === taskId)
    foundTask.isComplete = !foundTask.isComplete
    logger.log(AppState.tasks)
  }

  async deleteTask(taskId, projectId) {
    const res = await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    logger.log('deleted task', res.data)
    AppState.tasks.filter(t => t.id !== taskId)
  }
}

export const tasksService = new TasksService()
