<template>
  <div class="card">
    <h5 class="card-header">
      {{ project.name }}
    </h5>
    <div class="card-body">
      <h5 class="card-title">
      </h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { ProjectModel } from '../Models/Project'
import { AppState } from '../AppState'
export default {
  props: {
    project: { type: ProjectModel, required: true }
  },
  setup(props) {
    return {
    }
  }
}
</script>

<style>

</style>
