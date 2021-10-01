export class Note {
  constructor(noteData) {
    this.body = noteData.Note
    this.backlogItemId = noteData.backlogItemId
    this.projectId = noteData.projectId
    this.creatorId = noteData.creatorId
  }
}
