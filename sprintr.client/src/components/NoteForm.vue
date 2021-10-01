<template>
  <form @submit.prevent="createNote()">
    <div class="form-group">
      <label for="body">Note:</label>
      <input type="text" name="body" v-model="body">
    </div>
    <button type="submit"></button>
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
    }
  },
  setup() {
    const note = ref({})
    return {
      createNote() {
        notesService.createNote()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
