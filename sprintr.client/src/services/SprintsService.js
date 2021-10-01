import { AppState } from '../AppState'
import { SprintModel } from '../Models/Sprint'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SprintsService {
  async getSptintsByProjectId(projectId) {
    const res = await api.get(`api/projects/${projectId}/sprints`)
    logger.log('sprints', res)
    AppState.sprints = res.data.map(s => new SprintModel(s))
  }

  async createSprint(sprintData, projectId) {
    const res = await api.post(`api/projects/${projectId}/sprints`, sprintData)
    logger.log(res.data)
    AppState.sprints = AppState.sprints.unshift(res.data)
  }

  async deleteSprint(projectId, sprintId) {
    const res = await api.delete(`api/projects/${projectId}/sprints/${sprintId}`)
    AppState.sprints = AppState.sprints.filter(s => s.id !== sprintId)
    logger.log('deleted Sprint', res.data)
  }
}

export const sprintsService = new SprintsService()
