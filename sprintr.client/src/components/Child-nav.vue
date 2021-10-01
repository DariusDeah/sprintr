<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3 ">
    <div class="col-lg-6 d-flex">
      <h1 class="text-light fs-1">
        {{ project.name }}
      </h1>
      <button class="btn btn-danger" @click="removeProject()">
        delete project
      </button>
    </div>
    <div class="col-lg-6">
      <ul>
        <li>backlog</li>
        <router-link :to="{name:'Project.Sprint', params:{id:project.id}}">
          <li class="selectable">
            sprint
          </li>
        </router-link>

        <li>sprint2</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { projectService } from '../services/ProjectService'
import { ProjectModel } from '../Models/Project'
export default {
  props: {
    projects: { type: ProjectModel, required: true }
  },
  setup(props) {
    const editable = ref({})
    return {
      editable,
      project: computed(() => AppState.activeProject),
      toggleBacklogForm() {
        document.getElementById('BacklogForm').classList.toggle('visually-hidden')
      },
      async removeProject() {
        try {
          if (await Pop.confirm()) {
            await projectService.removeProject(props.projects.id)
            Pop.toast('project deleted')
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
