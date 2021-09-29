<template>
  <Projects v-for="p in projects" :key="p.id" :project="p" />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { projectService } from '../services/ProjectService'
export default {

  setup() {
    onMounted(async() => {
      await projectService.getProjects()
    })
    return {
      projects: computed(() => AppState.projects)

    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
