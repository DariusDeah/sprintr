import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SprintsService {
  async getSptintsByProjectId() {
    try {
      const res = await api.get('/api/projects/:projectId/sprints')
      logger.log('getSptintsByProjectId', res)
      return res
    } catch (error) {
      logger.log(error)
    }
  }
}

export const sprintsService = new SprintsService()
