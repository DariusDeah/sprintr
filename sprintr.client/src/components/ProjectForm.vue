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
        <button type="submit" class="btn btn-success">
          Post
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectService } from '../services/ProjectService'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'

export default {
  setup() {
    const project = ref({ title: '', description: '' })
    return {
      project,
      async createProject() {
        try {
          await projectService.createProject(project.value)
          Pop.toast('Project Added', 'success')
          const modal = Modal.getInstance(document.getElementById('project-form'))
          modal.hide()
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
