import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

// Quinn
export class TasksController extends BaseController {
  constructor() {
    super('api/projects/:projectId/tasks')
    this.router
      .get('', this.getTasks)
      .get('/:id', this.getTasksByProjectId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addTask)
      .put('/:id', this.editTask)
      .delete('/:id', this.removeTask)
  }

  async getTasksByProjectId(req, res, next) {
    try {
      const tasks = await tasksService.getTasks(req.params.projectId)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async addTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      
      const task = await tasksService.addTask(req.body)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async getTasks(req, res, next) {
    try {
      const tasks = await tasksService.getTasks(req.params.projectId)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    try {
      // if (req.body.creatorId !== req.userInfo.id) {
      //   throw new BadRequest('Not Yours to Edit!')
      // }
      const task = await tasksService.editTask(req.params.id, req.body)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async removeTask(req, res, next) {
    try {
      const task = await tasksService.removeTask(req.params.projectId, req.userInfo.id, req.params.id)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }
}
