import { AppState } from '../AppState'
import { Note } from '../Models/Note'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NotesService {
  async getNotesByProjectId(projectId) {
    const res = await api.get(`api/projects/${projectId}/notes`)
    AppState.notes = res.data.map(n => new Note(n))
    logger.log('appstate notes', AppState.notes)
  }

  async createNote(projectId, noteData) {
    const res = await api.post(`api/projects/${projectId}/notes`, noteData)
    AppState.notes.unshift(new Note(res.data))
    logger.log('created Note', AppState.notes)
  }

  async deleteNote(projectId, noteId) {
    const res = await api.delete(`api/projects/${projectId}/notes/${noteId}`)
    AppState.notes.filter(n => n.id !== noteId)
    logger.log('deleted Note', res.data)
  }
}

export const notesService = new NotesService()
