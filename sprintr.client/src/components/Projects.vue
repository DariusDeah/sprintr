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
      <div v-if="account.id === project.creatorId">
        <button class="btn btn-danger " @click="removeProject()">
          delete
        </button>
      </div>
      <!-- <button class="btn btn-secondary " @click="editProject()">
        edit
      </button> -->
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { ProjectModel } from '../Models/Project'
import { projectService } from '../services/ProjectService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  props: {
    project: { type: ProjectModel, required: true }
  },
  setup(props) {
    return {
      async removeProject() {
        try {
          if (await Pop.confirm()) {
            await projectService.removeProject(props.project.id)
            Pop.toast('project deleted')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      // TODO add edit method
      async editProject() {
        await projectService.editProject(props.project.id) // projectData
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>

</style>
