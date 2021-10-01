export class Task {
  constructor(taskData) {
    this.id = taskData.id
    this.name = taskData.name
    this.weight = taskData.weight
    this.projectId = taskData.projectId
    this.backlogItemId = taskData.backlogItemId
    this.creatorId = taskData.creatorId
    this.isComplete = taskData.isComplete
  }
}
