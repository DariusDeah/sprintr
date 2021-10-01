<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6 d-flex">
      <h1 class="text-light fs-1">
        {{ project.name }}
      </h1>
      <div v-if="account.id === project.creatorId">
        <button class="btn btn-danger" @click="removeProject()">
          delete project
        </button>
      </div>
    </div>
    <div class="col-lg-6">
      <ul>
        <router-link :to="{name:'Project.Backlog'}">
          <button class="btn btn-info nav-link">
            backlog
          </button>
        </router-link>
        <!-- <li>sprint{{ sprint.length }}</li> -->
      </ul>
      <router-link :to="{name:'Project.Sprint'}">
        <button class="btn btn-info nav-link">
          sprint
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { projectService } from '../services/ProjectService'
import { ProjectModel } from '../Models/Project'
import { useRoute } from 'vue-router'
import { router } from '../router'
export default {

  props: {
    projects: { type: ProjectModel, required: true },
    projectId: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const route = useRoute()
    const editable = ref({})
    return {
      editable,
      project: computed(() => AppState.activeProject),
      account: computed(() => AppState.account),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      },
      async removeProject() {
        try {
          if (await Pop.confirm()) {
            await projectService.removeProject(route.params.projectId)
            Pop.toast('project deleted')
            router.push({ path: '/' })
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }

    }
  }
}
</script>

<style>

</style>
