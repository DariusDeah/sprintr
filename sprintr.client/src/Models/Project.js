export class ProjectModel {
  constructor(projectData) {
    this.createdAt = projectData.createdAt
    this.creatorId = projectData.creatorId
    this.description = projectData.description
    this.id = projectData.id
    this.name = projectData.name
    this.updatedAt = projectData.updatatedAt
  }
}

// #region RES DATA
// createdAt: "2021-09-28T16:24:12.183Z"
// creatorId: "61418cf64f24a066d702457b"
// description: "Test Description"
// id: "615341acd467789ba0a2d172"
// name: "Test Name"
// updatedAt: "2021-09-28T16:24:12.183Z"
// __v: 0
// _id: "615341acd467789ba0a2d172"
// #endregion
