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

  async getProjectsById(projectId) {
    const res = await api.get(`api/projects/${projectId}`)
    logger.log(res.data)
    AppState.activeProject = res.data
  }

  async createProject(projectData) {
    const res = await api.post('api/projects', projectData)
    logger.log(res.data)
    AppState.projects.unshift(new ProjectModel(res.data))
  }

  async removeProject(projectId) {
    const res = await this.getProjectsById(projectId)
    await api.delete(res)
  }
}
export const projectService = new ProjectService()
