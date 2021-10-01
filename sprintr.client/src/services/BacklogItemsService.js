import { AppState } from '../AppState'
import { BacklogItem } from '../Models/BacklogItem'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BacklogItemsService {
  async getBacklogItemsByProjectId(projectId) {
    const res = await api.get(`api/projects/${projectId}/backlog`)
    logger.log('BacklogItems by Project id', res)
    AppState.backlogItems = res.data.map(b => new BacklogItem(b))
  }

  async createBacklog(projectId, backlogData) {
    const res = await api.post(`api/projects/${projectId}/backlog`, backlogData)
    logger.log('created res', res)
    AppState.backlogItems.unshift(new BacklogItem(res.data))
  }

  async deleteBacklog(backlogId, projectId) {
    const res = await api.delete(`api/projects/${projectId}/backlog/${backlogId}`)
    AppState.backlogItems = AppState.backlogItems.filter(b => b.id !== backlogId)
    logger.log('deleted res', res)
  }

  async updateBacklog(data, projectId, backlogId) {
    const foundBacklog = await AppState.backlogItems.find(b => b.id === backlogId)
    foundBacklog.status = data.toString()
    const res = await api.put(`api/projects/${projectId}/backlog/${backlogId}`, foundBacklog)
    const foundNBacklog = AppState.backlogItems.findIndex(b => b.id === backlogId)
    AppState.backlogItems[foundNBacklog] = res.data

    logger.log('Updated Backlog', res.data)
  }
}

export const backlogItemsService = new BacklogItemsService()
