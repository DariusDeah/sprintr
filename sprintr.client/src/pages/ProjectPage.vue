<template>
  <Child-nav />
  project page
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { projectService } from '../services/ProjectService'
import { useRoute } from 'vue-router'
export default {
  setup() {
  // allows us to use the id in the url
    const route = useRoute()
    onMounted(async() => {
      await projectService.getProjectsById(route.params.projectId)
    })
  }
}
</script>
