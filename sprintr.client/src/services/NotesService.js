import { AppState } from '../AppState'
import { Note } from '../Models/note'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NotesService {
  async getNotesByProjectId(projectId) {
    const res = await api.get(`api/projects/${projectId}/notes`)
    AppState.notes = res.data.map(n => new Note(n))
  }

  async createNote(projectId, noteData) {
    const res = await api.post(`api/projects/${projectId}/notes`, noteData)
    logger.log('created Note', res)
  }

  async deleteNote(projectId, noteId) {
    const res = await api.delete(`api/projects/${projectId}/${noteId}`)
    logger.log('deleted Note', res.data)
  }
}

export const notesService = new NotesService()
