import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

// Quinn
export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .get('', this.getTasks)
      .put('', this.editTask)
      .delete('', this.removeTask)
  }

  async getTasks(req, res, next) {
    try {
      const res = await tasksService.getTasks()
      return res
    } catch (error) {
      next(error)
    }
  }

  editTask(req, res, next) {
    try {
      const task = tasksService.editTask(req.data.name)
      return task
    } catch (error) {
      next(error)
    }
  }

  removeTask(req, res, next) {
    try {
      const task = tasksService.removeTask()
      return task
    } catch (error) {
      next(error)
    }
  }
}
