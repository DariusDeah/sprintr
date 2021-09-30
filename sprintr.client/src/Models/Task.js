export class Task {
  constructor(taskData) {
    this.name = taskData.name
    this.weight = taskData.weight
    this.projectId = taskData.projectId
    this.backlogItemId = taskData.backlogItemId
    this.creatorId = taskData.creatorId
  }
}
