<template>
  <div class="row">
    <div class="col-2">
      <img :src="note.creator.picture" class="Icon">
    </div>
    <div class="col-9">
      {{ note.creator.name }} <br>
      {{ note.body }}
    </div>
    <div class="col-1" v-if="account.id === project.creatorId">
      <i class="mdi mdi-delete text-danger selectable" @click="deleteNote(note.id)"></i>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Note } from '../Models/Note'
import { notesService } from '../services/NotesService'
import { AppState } from '../AppState'
export default {
  props: {
    note: {
      type: Note,
      required: true
    },
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      project: computed(() => AppState.activeProject),
      account: computed(() => AppState.account),
      async deleteNote(noteId) {
        await notesService.deleteNote(props.projectId, noteId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Icon{
  height: 25px;
}
</style>
