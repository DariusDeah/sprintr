import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SprintsService {
  async getSptintsByProjectId(projectId) {
    const res = await api.get(`/api/projects/${projectId}/sprints`)
    logger.log('sprints', res)
  }
}

export const sprintsService = new SprintsService()
