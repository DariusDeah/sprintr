export class SprintModel {
  constructor(sprint) {
    this.name = sprint.name
    this.projectId = sprint.projectId
    this.id = sprint.id
    this.creatorId = sprint.creatorId
    this.createdAt = sprint.createdAt
    this.updated = sprint.updated
  }
}
