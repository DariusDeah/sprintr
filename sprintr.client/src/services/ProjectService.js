import { AppState } from '../AppState'
import { ProjectModel } from '../Models/Project'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProjectService {
  async getProjects() {
    const res = await api.get('api/projects')
    logger.log(res.data)
    AppState.projects = res.data.map(p => new ProjectModel(p))
  }
}
export const projectService = new ProjectService()
