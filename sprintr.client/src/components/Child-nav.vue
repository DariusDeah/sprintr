<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6">
      <h1 class="text-light fs-1">
        {{ project.name }}
      </h1>
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>

<style>

</style>
