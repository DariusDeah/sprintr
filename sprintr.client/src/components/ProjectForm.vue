<template>
  <form @submit.prevent="createProject()">
    <div class="form-group">
      <input type="text"
             class="from-control"
             name="title"
             placeholder="Project Title"
             v-model="project.name"
             required
      >
      <div class="form-group">
        <input type="text"
               class="from-control"
               name="body"
               placeholder="Description"
               v-model="project.description"
               required
        >
      </div>
      <div class="form-group">
        <!-- <router-link :to="{ name: 'Project',params:{projectId:projects.id} }"> -->
        <button type="submit" class="btn btn-success">
          Post
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectService } from '../services/ProjectService'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
import { router } from '../router'
import { AppState } from '../AppState'
import { ProjectModel } from '../Models/Project'

export default {
  props: {
    projects: { type: ProjectModel, required: true },
    projectId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const project = ref({ })
    return {
      project,
      async createProject(props) {
        try {
          await projectService.createProject(project.value)
          Pop.toast('Project Added', 'success')
          const modal = Modal.getInstance(document.getElementById('project-modal'))
          modal.hide()

          // clears the form
          project.value = {}
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
