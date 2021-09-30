<template>
  <Child-nav :project-id="route.params.projectId" />
  <BacklogItem v-for="b in backlogItems" :key="b.id" :backlogitem="b" :project-id="route.params.projectId" />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { projectService } from '../services/ProjectService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { backlogItemsService } from '../services/BacklogItemsService'
export default {
  setup() {
  // allows us to use the id in the url
    const route = useRoute()
    onMounted(async() => {
      await projectService.getProjectsById(route.params.projectId)
      await backlogItemsService.getBacklogItemsByProjectId(route.params.projectId)
    })
    return {
      route,
      backlogItems: computed(() => AppState.backlogItems)
    }
  }
}
</script>
