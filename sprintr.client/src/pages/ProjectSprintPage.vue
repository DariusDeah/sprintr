<template>
  <div class="project-sprint">
    <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#sprint-modal">
      +Sprint
    </button>

    <Modal id="sprint-modal">
      <template #modal-title>
        <h4>New Sprint</h4>
      </template>
      <template #modal-body>
        <SprintForm />
      </template>
    </Modal>

    <Sprints v-for="s in sprints " :key="s.id" :sprint="s" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { sprintsService } from '../services/SprintsService'
import { useRoute } from 'vue-router'
export default {

  setup() {
    const route = useRoute()
    onMounted(async() => {
      await sprintsService.getSptintsByProjectId(route.params.projectId)
    })
    return {
      route,
      project: computed(() => AppState.activeProject.id),

      sprints: computed(() => AppState.sprints)
    }
  }
}
</script>

<style>

</style>
