<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6">
      <h1 class="text-light fs-1">
        {{ project.name }}
      </h1>
    </div>
    <div class="col-lg-6">
      <ul>
        <li>backlog</li>
        <router-link :to="{name:'Project.Sprint', params:{id:project.id}}">
          <li class="selectable">
            sprint
          </li>
        </router-link>

        <li>sprint2</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      project: computed(() => AppState.activeProject),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      }
    }
  }
}
</script>

<style>

</style>
