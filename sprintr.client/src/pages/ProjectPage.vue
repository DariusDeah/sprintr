<template>
  <Child-nav />
  <BacklogItem v-for="b in backlogItems" :key="b.id" :backlogitem="b" />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { projectService } from '../services/ProjectService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  setup() {
  // allows us to use the id in the url
    const route = useRoute()
    onMounted(async() => {
      await projectService.getProjectsById(route.params.projectId)
    })
    return {
      backlogItems: computed(() => AppState.backlogItems)
    }
  }
}
</script>
