<template>
  <form @submit.prevent="createNote()">
    <div class="form-group">
      <label for="body">Note:</label>
      <input type="text" name="body" v-model="note.body" required>
    </div>
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { notesService } from '../services/NotesService'
export default {
  props: {
    backlogItemId: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const note = ref({})
    return {
      note,
      createNote() {
        note.value.backlogItemId = props.backlogItemId
        note.value.projectId = props.projectId
        notesService.createNote(props.projectId, note.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
