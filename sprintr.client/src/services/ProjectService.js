import { AppState } from '../AppState'
import { ProjectModel } from '../Models/Project'
import { router } from '../router'
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

  async createProject(projectData, projectId) {
    const res = await api.post('api/projects', projectData)
    logger.log(res.data)
    AppState.projects.unshift(new ProjectModel(res.data))
    router.push({ path: 'Project', params: { projectId: projectId } })
  }

  async removeProject(projectId) {
    const res = await api.delete(`api/projects/${projectId}`)
    logger.log(res.data)
    AppState.projects = AppState.projects.filter(p => p.id !== projectId)
  }

  // async editProject(projectId, projectData) {
  //   const res = await api.put(`api/projects/${projectId}`, projectData)
  // }
}
export const projectService = new ProjectService()
