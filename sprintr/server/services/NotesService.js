import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class NotesService {
  async getNotes(projectId) {
    const notes = await dbContext.Notes.find({ projectId: projectId }).populate('creator')
    return notes
  }

  async noteById(noteId) {
    const note = await dbContext.Notes.findById(noteId).populate('creator')
    if (!note) {
      throw new BadRequest('no note by that name')
    }
    return note
  }

  async createNote(noteData) {
    const note = await dbContext.Notes.create(noteData)
    await note.populate('creator')
    return note
  }

  async removeNote(noteId, userId) {
    const removedNote = await this.noteById(noteId)
    if (removedNote.creatorId.toString() !== userId) {
      throw new Forbidden()
    }
    await removedNote.remove()
    return removedNote
  }
}
export const notesService = new NotesService()
