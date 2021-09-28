import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

// Quinn
export class TasksController extends BaseController {
  constructor() {
    super('api/projects/:id/tasks')
    this.router
      .get('', this.getTasks)
      .post('', this.addTask)
      .put('/:id', this.editTask)
      .delete('/:id', this.removeTask)
  }

  async addTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const task = await tasksService.addTask(req.body)
      res.send(task)
    } catch (error) {
      next(error)
    }
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
      // if (req.body.creatorId !== req.userInfo.id) {
      //   throw new BadRequest('Not Yours to Edit!')
      // }
      const task = tasksService.editTask(req.body.id, req.body)
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
