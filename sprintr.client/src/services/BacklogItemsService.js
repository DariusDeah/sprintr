import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BacklogItemsService {
  async getBacklogItemsByProjectId() {
    const res = await api.get('/api/projects/:projectId/backlog')
    logger.log('BacklogItems by Project id', res)
  }
}

export const backlogItemsService = new BacklogItemsService()
