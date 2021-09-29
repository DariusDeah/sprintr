import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProjectService {
  async getProjects() {
    const res = await api.get('api/projects')
    logger.log(res.data)
  }
}
export const projectService = new ProjectService()
