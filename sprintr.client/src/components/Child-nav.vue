<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6">
      <h1 class="text-light fs-1">
        {{ projects.name }}
      </h1>
    </div>
    <div class="col-lg-6">
      <ul>
        <li>backlog</li>
        <li>sprint</li>
        <li>sprint2</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { backlogItemsService } from '../services/BacklogItemsService'
import Pop from '../utils/Pop'
export default {
  props: {
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable,
      projects: computed(() => AppState.activeProject),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      },
      async createBacklog() {
        try {
          await backlogItemsService.createBacklog(props.projectId, editable.value)
        } catch (error) {
          Pop.toast('error', error.message)
        }
      }
    }
  }
}
</script>

<style>

</style>
