import { tasksService } from '../services/TasksService'
import BaseController from '../utils/BaseController'

// Quinn
export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      // @ts-ignore
      .get('', getTasks())
      .put('')
      .delete('')
  }
}
function getTasks() {
  tasksService.getTasks()
}
