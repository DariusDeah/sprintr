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
      <button class="btn btn-primary ">
        <router-link :to="{ name: 'Project',params:{projectId:project.id} }" class="btn text-light selectable text-uppercase">
          Project
        </router-link>
      </button>
      <button class="btn btn-danger " @click="removeProject">
        delete
      </button>
    </div>
  </div>
</template>

<script>
import { ProjectModel } from '../Models/Project'
import { projectService } from '../services/ProjectService'
export default {
  props: {
    project: { type: ProjectModel, required: true }
  },
  setup(props) {
    return {
      async removeProject() {
        await projectService.removeProject()
      }
    }
  }
}
</script>

<style>

</style>
