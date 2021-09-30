import { AppState } from '../AppState'
import { BacklogItem } from '../Models/BacklogItem'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BacklogItemsService {
  async getBacklogItemsByProjectId() {
    const res = await api.get('api/projects/:projectId/backlog')
    logger.log('BacklogItems by Project id', res)
    AppState.backlogItems = res.data.map(b => new BacklogItem(b))
  }

  async createBacklog(projectId, backlogData) {
    const res = await api.post(`api/projects/${projectId}/backlog`, backlogData)
    AppState.backlogItems.unshift(new BacklogItem(res.data))
  }
}

export const backlogItemsService = new BacklogItemsService()
