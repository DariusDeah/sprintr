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
      const tasks = await tasksService.getTasks()
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  editTask(req, res, next) {
    try {
      const task = tasksService.editTask(req.data.name)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  removeTask(req, res, next) {
    try {
      const task = tasksService.removeTask()
      res.send(task)
    } catch (error) {
      next(error)
    }
  }
}
