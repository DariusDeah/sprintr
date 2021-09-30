export class BacklogItem {
  constructor(backlogData) {
    this.name = backlogData.name
    this.descrption = backlogData.descrption
    this.status = backlogData.status
    this.projectId = backlogData.projectId
    this.sprintId = backlogData.sprintId
    this.creatorId = backlogData.creatorId
    this.color = backlogData.color
  }
}
